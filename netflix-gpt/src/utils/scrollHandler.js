export const updateButtons = (sliderRef, setShowLeft, setShowRight) => {
    if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowLeft(scrollLeft > 5);
        setShowRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
};

export const scroll = (direction, sliderRef) => {
    if (sliderRef.current) {
        const { clientWidth, scrollLeft } = sliderRef.current;
        const scrollTo = direction === "left" 
            ? scrollLeft - clientWidth + 80 
            : scrollLeft + clientWidth - 80;

        sliderRef.current.scrollTo({
            left: scrollTo,
            behavior: "smooth"
        });
    }
};

