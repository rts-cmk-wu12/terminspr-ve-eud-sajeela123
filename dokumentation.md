# Dokumentation for Landrup-Dans
Sajeela Babar, WU12

<img src= "./Skærmbillede 2025-09-18 095348.png">

# sådan kommer du i gang

`npmm install sass react.icons`


`npm run dev`





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



* **React-icons**
et ikon-bibliotek, som er beregnet på React.

* **SASS**
en udvidelse til css, som lader mig lave funktioner,
variabler, mixins og nesting. jeg kan opdele min css i
moduler og dermed genbruge kode flere steder.

* **web-API fra Landrup-Dans-Api**
et interface til at få adgang til landrup-dans´s data, så
jeg kan lave min egen app. Dette er den eneste måde
 hvor jeg lovligt kan få adgang til  landrup-dans´s  data.

* **Zod**
et valideringsbibliotek til objekter og strings. jeg
bruger Zod til blandt andet at validere bruger-input fra formularer.

## Kode-eksempel

common Header komponent

(components/clander.card.jsx)



export default async function CalendarCard({ calendarData }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <>
      {!calendarData || calendarData.length < 1 ? (
        <div className="card-empty">
          No Activities available
        </div>
      ) : (
        <div>
          {calendarData.map((activity) => (
            <Link
              href={`/calendar/${activity.id}`}
              key={activity.id}
              className="card"
            >
              <div className="card-title">
                {activity.name}
              </div>
              <div className="card-subtitle">
                {activity.weekday} {activity.time}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}





jeg starter med at kalde en React hook "useState" som er en funktion, der 
returnerer et array. Arrayet indehodler 2 elementer: Er state og en sætter-function
til dette state. UseState tager imod et argument "initialState" som er vørdien for 
statet ved start.


