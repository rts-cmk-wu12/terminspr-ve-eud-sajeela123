# Dokumentation for SwapHub
Sajeela Babar, WU12

# sådan kommer du i gang

`npmm install sass react.icons`
`npm run dev`
` npm i -D sass   `

## Tech-stack
 * **next.js** 
 Et front-end framework baseret på react.js
 som også giver adgag til server-side komponeneter 
 og -actions, samt mappebaseret routing. 
 server-side komponeneter og funktioner giver er større sikkerhed, 
 de al koden afvikles på serveren fremfor i klienten.

* **react** 
Et bibliotek der giver mig mulighed for at lave komponeneter og
 håndtere states på en god og let måde. React har et stort community
 med at stort modul-bibliotek, som er aktivt, vel-dokumenteret og
 vel-understøttet. det erogså det mest brugte front-end bibliotek i 
 verden, så efterspørgdien på React-udviklere er stor.

* **GitHub**
et versionsstyringsværktøj, som lader mig lave branches og versioner
af min kode, så jeg let kan gå tilbage til tidligere versioner, 
hvis jeg for eksemple har lavet en fejl. jeg bruger Git 
sammen med GitHub.
* **Tailwind**
Et utility-baseret mobile-first css bibliotek. 


* **React-icons**
et ikon-bibliotek, som er beregnet på React.

* **SASS**
en udvidelse til css, som lader mig lave funktioner,
variabler, mixins og nesting. jeg kan opdele min css i
moduler og dermed genbruge kode flere steder.

* **web-API fra SwapHub**
et interface til at få adgang til SwapHub´s data, så
jeg kan lave min egen app. Dette er den eneste måde
 hvor jeg lovligt kan få adgang til  landrup-dans´s  data.

* **Zod**
et valideringsbibliotek til objekter og strings. jeg
bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel

common Header komponent
common footer komponent

(components/contact-form.jsx)


```javascript
"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
    title: "contact",
    description: " contact",

};


export default function ContactForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setStatus("plase enter your email first");
            return;
        }
        setStatus("send");

        try {
            const response = await fetch("http://localhost:4000/api/v1/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),

            });

            if (response.ok) {
                setStatus("Thanks for singin");
                setEmail("")

                setTimeout(() => {
                    router.push("/");
                }, 1500);
            }
            else {
                setStatus("Something went wrong. Try again");

            }

        } catch (error) {
            setStatus("Server problem.Try again")

        }
    };

    return (
        <div className="contact-form">
            <h1>Contact</h1>
            <p>Sign up for our newsletter for latest updates</p>

            <form onSubmit={handleSubmit}>

                <input type="email" placeholder="enter your email" value={email} onChange={(e) =>
                    setEmail(e.target.value)} />

                <button type="submit">Subscribe</button>
  </form>

            <p>{status}</p>
        </div>
    )

}

```

jeg starter med at kalde en react hook useRouter. Det er en funktion fra next.js,
 der navigere mekllem sider.

jeg bruger også useState to gange: først til at gemme værdien af e-mail, brugeren skriver i inputfeltet,
og derefter til at gemme en statusbesked, som fortæller om formularen er sendt, lykkedes, eller fejlede.

efter laver er en funktion, der hedder handleSubmit. Den køree, når brugeren trykker på "Subscribe" knappen.
Først stopper jeg browseren fra at reloade siden med e.preventDefault(). Derefter jeg tjekker om brugeren har skrevet en e-mail. hvis ikke skrevet så viser en fejlbesked. hvis skrevet, så sender en request til servern med fetch.

hvis serveren er ok, skriver jeg en tak besked, tømmer inputfeltet og sender brugeren til forsiden efter 1,5 sekund. Hvis der er nogen  fejl, vises en fejlbeskes i stedet.

Til sidst jeg returnerer lidt jsx, som viser en overskrift, en lille tekst, selve formularen med et input og en knap samt statusbeskeden.


