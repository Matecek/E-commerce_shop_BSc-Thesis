import styles from "./SizeSelector.module.css";
import REFRESH_IMG from "../../assets/refresh.svg";

export function SizeSelector({ sizeArray, selectedSize, setSelectedSize }) {
    return (
        <div>
            <p>Select size:</p>
            <div className={styles.sizeList}>
                {sizeArray.map((size, index) => (
                    <p
                        key={size}
                        onClick={() => setSelectedSize(index)}
                        className={`${styles.sizeNumber} ${
                            selectedSize === index ? styles.selectedSize : ""
                        }`}
                    >
                        {size}
                    </p>
                ))}
                <button onClick={() => setSelectedSize(null)}>
                    <img src={REFRESH_IMG} alt="Refresh sizes" />
                </button>
            </div>
        </div>
    );
}
