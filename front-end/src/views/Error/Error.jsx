import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { NotFound } from "../../components/NotFound/NotFound";

export function Error() {
    return (
        //Komponent wyświetlający stronę błędu
        <FlexContainer>
            <NotFound />
        </FlexContainer>
    );
}
