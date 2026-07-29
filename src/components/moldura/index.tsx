import { CONSTANTS } from "../../config/constants";
import "./style.css"

const Moldura = () => {
    return (
        <div className="frame-base">
            <div className="frame-base-light"></div>
            <div className="side-button mute"></div>
            <div className="side-button volume-up"></div>
            <div className="side-button volume-down"></div>
            <div className="side-button hold"></div>
            <div className="stripe top"></div>
            <div className="stripe bottom"></div>
            <div className="port"></div>
            <div className="layer2">
                <div className="layer2-light"></div>
                <div className="layer2-light light-right"></div>
                <div className="screen">
                    <img src={CONSTANTS.mobile} id="background"/>
                            <div className="mask">
                                <div className="left-pie"></div>
                                <div className="right-pie"></div>
                                <div className="speaker"></div>
                                <div className="camera">
                                    <div className="lenz left"></div>
                                    <div className="lenz right"></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            );
}

            export default Moldura;