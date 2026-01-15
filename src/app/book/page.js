import { Suspense } from "react";
import Footer from "@/components/Footer";
import BookingHero from "@/components/BookingHero";
import BookingRules from "@/components/BookingRules";
import BookingCriteria from "@/components/BookingCriteria";
import BookingProcess from "@/components/BookingProcess";
import BookingCalendly from "@/components/BookingCalendly";

export default function Booking() {
    return (
        <>
            <BookingHero />
            <BookingRules />
            <BookingCriteria />
            <BookingProcess />
            <Suspense fallback={<div>Loading...</div>}>
                <BookingCalendly />
            </Suspense>
            {/* <Footer /> */}
        </>
    );
}
