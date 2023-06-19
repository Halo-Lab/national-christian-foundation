import styles from "./FundDropdown.module.scss";
import cn from "classnames";
import ChevronDown from "assets/icons/ChevronDown";
import useDropdown from "hooks/useDropdown";
import Button from "components/common/Button";
import Plus from "assets/icons/Plus";
import FundDropdownItem from "./FundDropdownItem";

const FundDropdown = () => {
    const { isActive, toggleDropdown, dropdownRef } = useDropdown();
    const fundsList = [
        {
            name: "Other family fund",
            person: "Jenny Wilson",
            office: "National office",
            number: "#123456",
            balance: "5,357",
        },
        {
            name: "The sample family fund",
            person: "Jenny Wilson",
            office: "National office",
            number: "#123451236",
            balance: "123,456",
            isChecked: true,
        },
        {
            name: "Example name fund",
            person: "Jenny Wilson",
            office: "National office",
            number: "#123456",
            balance: "5,357",
        },
        {
            name: "Example name fund",
            person: "Jenny Wilson",
            office: "National office",
            number: "#123456",
            balance: "5,357",
        },
    ];
    
    return (
        <div
            className={cn("cta", styles.wrapper, isActive && styles.active)}
            onClick={toggleDropdown}
            ref={dropdownRef}
        >
            <p className="text-m">The sample family fund</p>
            <div className={cn("icon", styles.chevron)}>
                <ChevronDown />
            </div>
            <div className={cn("dropdown", styles.dropdown)}>
                <ul className={styles.list}>
                    {fundsList.map((fund, index) => (
                        <FundDropdownItem fund={fund} key={index} />
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <Button
                        text="Add a new fund"
                        type="primary"
                        icon={<Plus />}
                    />
                    <Button type="ghost" text="View all" />
                </div>
            </div>
        </div>
    );
};

export default FundDropdown;
