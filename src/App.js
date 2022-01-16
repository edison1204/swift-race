import './App.scss';
import React, { useEffect, useState } from "react";
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import RoadMapSection from './components/RoadMapSection';
import PartnerSection from './components/PartnerSection';
import FooterSection from './components/FooterSection';
import Web3EthContract from "web3-eth-contract";


function App() {
  const [CONTRACT, setContract] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage,setErrorMessage] = useState(null);
  const [mintAmount] = useState(1); // IMPORTANT - Mint Amount.
  const [account, setAccount] = useState(null);

  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  Web3EthContract.setProvider(ethereum);


  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  useEffect(() => {
    connect();
  }, []);

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    return config;
  };

  const fetchABI = async () => {
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    return abi;
  }

  const checkMetamask = async () => {
    if (metamaskIsInstalled) {
      return true;
    } else {
      setErrorMessage("Please Install Metamask.");
      return false;
    }
  }

  const updateData = async (contract) => {
    setContract(contract);
    try {
      const TOTAL_SUPPLY = await contract.methods.totalSupply().call();
      const MAX_SUPPLY = await contract.methods.maxSupply().call();
    } catch (err) {
      setErrorMessage("Something went wrong.")
    }
  }

  const scrollTo = async (id) => {
    const el = await document.getElementById(id);
    console.log('EL');
    console.log(el)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const home = await document.getElementById('landing-section');
      home.scrollIntoView({ behavior: 'smooth' })
    }
  }




  const connect = async () => {
    setErrorMessage(null);
    const config = await getConfig();
    SET_CONFIG(config);

    const abi = await fetchABI();
    const check = await checkMetamask();

    if (check) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });
        // eslint-disable-next-line eqeqeq
        if (networkId == config.NETWORK.ID) {
          const ContractObj = await new Web3EthContract(
            abi,
            config.CONTRACT_ADDRESS
          );

          if (accounts[0]) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          };
          setAccount(accounts[0]);
          updateData(ContractObj);

          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
        } else {
          setErrorMessage(`Change network to ${CONFIG.NETWORK.NAME}.`)
        }
      } catch (err) {
        setErrorMessage("Something went wrong.");
      }
    }
  }

  const mint = async () => {
    setErrorMessage(null);
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);

    if (CONTRACT) {
      try {
        CONTRACT.methods
          .mint(account, mintAmount)
          .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: account,
            value: totalCostWei,
          })
          .once("error", (err) => {
            console.error(err);
            setErrorMessage("Sorry, something went wrong please try again later.");
          })
          .then((receipt) => {
            updateData(CONTRACT)
          });
      } catch (err) {
        console.error(err);
        setErrorMessage("Sorry, something went wrong please try again later.");
      }
    } else {
      connect();
    }
  }

  const authenticate = async () => {
    await connect();
    if (account) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }
  const logout = async () => {
    setAccount(null);
    setContract(null);
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      <header>
        <div className="logo-wrapper">
          <img onClick={() => scrollTo("landing-section")} className="logo" src="/logo/logo.png" alt="Swift Race" />
        </div>
        <div className="links-wrapper">
          <a onClick={() => scrollTo("roadmap-section")} className="nav-links">ROADMAP</a>
          <a onClick={() => scrollTo("partners-section")} className="nav-links">PARTNERSHIP</a>
          <a onClick={() => scrollTo("about-section")} className="nav-links">TEAM</a>
          {(!isAuthenticated) ?
            <div className="nav-links lg-hidden" onClick={() => authenticate()}>CONNECT WALLET</div>
            : <div className="nav-links lg-hidden" onClick={() => logout()}>DISCONNECT</div>
          }
        </div>
        <div className="nav-right-wrapper sm-hidden">
          {(!isAuthenticated) ?
            <button className="def-btn" onClick={() => authenticate()}>CONNECT WALLET</button>

            : <button className="def-btn" onClick={() => logout()}>DISCONNECT</button>
          }
        </div>
      </header>

      <LandingSection propsStake={() => { mint() }} errorMessage={errorMessage} />
      <AboutSection />
      <RoadMapSection />
      <PartnerSection />
      <FooterSection />
    </div>
  );
}

export default App;