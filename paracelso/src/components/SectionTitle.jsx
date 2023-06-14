import Styles from "./styles/SectionTitle.module.css";

function SectionTitle({color1, color2}){
    return(
        <div className={Styles.Box}>
            <text className={Styles.Color1}>
                {color1}
            </text>
            <text className={Styles.Color2}>
                {color2}
            </text>
        </div>
    );
}
export default SectionTitle;