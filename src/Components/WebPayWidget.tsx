import * as React from "react";
//import { onMount } from 'svelte';//replaced with ComenentDidMount
import { RPC_API_URL } from './Helpers/config';
import { adapter, connected, solanaNetwork } from './Stores';
import { getTokenRegistry } from './Stores/tokenRegistry';
import Wallet from './Components/Wallet/Wallet.svelte';
export let name: string;

solanaNetwork.update(() => RPC_API_URL);

interface ButtonProps {
  name: string;
}

class WebPayWidget extends React.Component {
     Constructor() {
        super();
        this.state = {
        isLoading: true,
        status: "In progression..."
        };
        }
        //does this need to be async?
         ComponentDidMount() {
            // setTimeout(() => {
            // this.setState({
            // isLoading: false,
            // status: "Completed!"
            // });
            // }, 2000);
            getTokenRegistry();
            }
            render() {
            console.log("Status: ", this.state.status);
            return (
            <div className="WebPayWidget">
            {this.state.isLoading ? <h1>Page is Loading.....</h1> : <Conditional />}
            </div>
            );
            }
            }
            export default WebPayWidget;