import ReactFlagsSelect from "react-flags-select";
import { Container } from "./styles";

const LanguageSwitcher = ({selected, setSelected}: any) => {

  return (
   <Container>
    <ReactFlagsSelect
      onSelect={(code) => setSelected(code)}
      selected={selected}
      countries={["US", "BR"]}
      customLabels={{ US: "EN-US", BR: "PT-BR"}}
      placeholder="Select Language"
      searchPlaceholder="Search countries"
    />
   </Container>
  );
};

export default LanguageSwitcher;