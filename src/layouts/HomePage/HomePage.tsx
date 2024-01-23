import { BookServices } from "./components/BookServices";
import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { ReturnBook } from "./components/ReturnBook";

export const HomePage = () => {
    return(
        <>
        <ExploreTopBooks/>
        <Carousel/>
        <Heros/>
        <BookServices/>
        <ReturnBook/>
        </>
    
    );
}