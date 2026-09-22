# Digital Invitation Suite

Build a premium, elegant interactive Indian wedding invitation website based VERY closely on the attached Canva screenshots.



IMPORTANT:

The attached screenshots are the primary visual reference. Do not redesign them into a generic modern wedding website. Recreate the same overall composition, typography feel, colors, illustrations, envelope, photographs, decorative elements, spacing and editorial aesthetic.



The experience should feel like a physical luxury wedding invitation being opened digitally.



==================================================

CORE EXPERIENCE

==================================================



Create a single-page wedding invitation website with TWO STATES:



STATE 1: CLOSED INVITATION / ENVELOPE

STATE 2: OPENED WEDDING INVITATION



The website should initially show only the closed envelope invitation centered on the screen.



The envelope should look like the dark olive/forest-green envelope shown in the reference.



At the center of the envelope is a circular gold wax seal containing the initials:



"AA"



Below the envelope, show:



"SCROLL"



Use an elegant serif font and subtle animation.



The envelope should occupy the visual focus of the first viewport.



Do NOT immediately show the full invitation content behind it.



==================================================

ENVELOPE INTERACTION

==================================================



The envelope is interactive.



When the user clicks/taps the envelope or the "AA" wax seal:



1. Slightly scale the envelope up.

2. Add a very subtle shadow/depth effect.

3. The gold wax seal should gently lift/fade away.

4. The top triangular envelope flap should smoothly rotate/open upward.

5. The invitation card inside should become visible.

6. The card should smoothly slide upward/out of the envelope.

7. The envelope should gently move downward/fade.

8. Transition seamlessly into the full invitation page.



The animation should feel physical and luxurious, not like a basic CSS hover effect.



Use smooth easing such as:

cubic-bezier(0.22, 1, 0.36, 1)



Animation duration should generally be around 800ms–1400ms depending on the element.



Use staggered animation timing for:

- wax seal

- envelope flap

- invitation card

- surrounding decorative elements



Avoid excessive bouncing, spinning or flashy effects.



The opening sequence should feel slow, elegant and cinematic.



On mobile, tapping anywhere on the envelope should work naturally.



==================================================

INITIAL SCREEN DESIGN

==================================================



Background:

Warm ivory / cream.



Use approximately:

#F7F1E3

or a similarly warm paper color.



Envelope:

Deep muted olive green / forest green.



Approximate palette:

#26351A

#344321

#D4B16A

#E9DFC5



The envelope should have subtle paper/fabric texture if possible.



Center:

Large dark-green envelope.



Envelope proportions should resemble the screenshot.



Wax seal:

Gold circular seal.

Initials "AA".

Slight metallic appearance.

Elegant serif typography.



Below:

"SCROLL"



Use a small understated serif font.



Add very subtle floating/paper movement so the page feels alive, but keep it sophisticated.



==================================================

OPENED INVITATION

==================================================



After the envelope animation completes, reveal the wedding invitation.



The overall page should closely follow the attached Canva design.



The design language is:



- warm ivory paper background

- muted olive green

- antique gold

- beige

- cream

- vintage editorial typography

- botanical illustrations

- postage-stamp style photographs

- old-paper / handwritten manuscript elements

- subtle Indian wedding elements



It should feel like:

"luxury vintage Indian wedding invitation + editorial stationery + botanical paper invitation"



NOT:

modern SaaS

minimal startup landing page

generic wedding template

bright pink wedding website

overly animated wedding website



==================================================

HERO / INTRO SECTION

==================================================



Show the botanical floral illustration on the left.



Show the names on the right:



AYUSHI

&

ABHISHEK



Then:



ARE GETTING MARRIED!



Then:



Please join us for our upcoming wedding.



Then an elegant gold/olive button:



SAVE THE DATE



Use typography very close to the screenshot.



The names should use an elegant high-contrast serif display font.



The "&" can use a contrasting elegant script/italic style.



==================================================

PHOTOGRAPHS

==================================================



Use the attached reference screenshots to understand the exact placement and treatment.



Photographs should appear as vintage postage-stamp style frames.



Do NOT simply place normal rectangular images.



Use:

- perforated postage edges

- slightly rotated photographs

- cream/gold borders

- subtle paper shadows

- vintage printed-paper feeling



If actual image assets are not available, create clearly marked image placeholders that can easily be replaced later.



Allow the photos to be stored as simple assets such as:



/public/images/couple-1.jpg

/public/images/couple-2.jpg



so they can easily be replaced.



==================================================

INVITATION TEXT SECTION

==================================================



Recreate the dark-green envelope/card section shown in the screenshot.



Include:



"Together with their families,

Ayushi & Abhishek

request the honour of your presence

as they exchange vows & begin their journey

as husband & wife. Join us for the celebration

of

love, laughter, and a happily ever after."



Maintain the centered elegant typography and decorative lace/paper border treatment from the reference.



==================================================

EVENT DETAILS

==================================================



Include the following text:



"As we gather to celebrate love, laughter and cherished traditions,

join us for an evening of



Mehendi & Sangeet on 10th December from 5:00 PM onwards,



followed by the auspicious



Haldi Ceremony at 8:00 AM the next morning.



Your presence will make these beautiful moments even more special."



Preserve the editorial/printed invitation style.



The important event names and times should have subtle typographic emphasis.



==================================================

MAIN WEDDING DETAILS CARD

==================================================



Create the large cream vintage card shown toward the lower-right portion of the reference.



Include:



Date: Thursday 11th of December, 2026

Time: At 12 o'clock in noon

Venue: Shaheen Bagh, Dehradun



Include the illustrated bride and groom at the bottom of the card.



Use the same vintage Indian wedding illustration aesthetic as the reference.



==================================================

DECORATIVE ELEMENTS

==================================================



Use the attached screenshots as the exact visual direction for:



- white flowers

- yellow botanical branches

- green leaves

- dried flower illustration

- manuscript / handwritten paper

- cream paper textures

- black vinyl record

- postage stamp borders

- Indian bride and groom illustration

- lace borders

- torn-paper edges

- antique gold details



Do not randomly add additional decorations.



Every decorative element should feel intentional.



==================================================

COLOR SYSTEM

==================================================



Use a restrained palette:



Deep Olive:

#283719



Dark Forest:

#1F2B16



Warm Ivory:

#F7F1E3



Cream:

#EEE5D1



Muted Beige:

#D8CCB1



Antique Gold:

#B88A3B



Soft Gold:

#C9A45C



Avoid bright colors.



==================================================

TYPOGRAPHY

==================================================



Use elegant serif typography.



Suggested fonts:



Display:

Cormorant Garamond

or Playfair Display



Body:

Cormorant Garamond

or Libre Baskerville



Script/accent:

A sophisticated calligraphic font where appropriate.



The typography should feel like luxury printed wedding stationery.



Do not use Inter, Roboto or generic SaaS fonts.



==================================================

SCROLL EXPERIENCE

==================================================



Once the invitation opens, the user should be able to scroll naturally through the entire invitation.



Add subtle scroll-triggered animations:



- botanical flowers gently fade/slide into place

- names fade upward

- photographs reveal with slight paper movement

- invitation text fades in

- decorative elements have subtle parallax

- paper/card elements can move 4–10px at most



Animations should be subtle.



Do NOT make every element fly around.



The page should remain elegant even if animations are disabled.



==================================================

RESPONSIVE DESIGN

==================================================



This is extremely important.



Desktop:

The invitation should look like the provided Canva design.



Tablet:

Maintain the editorial composition while reducing spacing.



Mobile:

Recompose the layout rather than simply shrinking everything.



On mobile:



- envelope remains centered

- envelope is large enough to interact with

- botanical illustration can move above the names

- names remain prominent

- photos stack naturally

- invitation text remains readable

- event card becomes full-width

- decorative elements should not overflow

- no horizontal scrolling



The envelope opening animation must work perfectly on mobile.



==================================================

INTERACTION DETAILS

==================================================



Add a subtle "Tap to open" instruction below the envelope.



It should gently pulse/fade:



"TAP TO OPEN"



Do not make it distracting.



After opening, optionally hide the instruction completely.



The envelope should only need one interaction.



Prevent accidental page scrolling during the opening animation.



After the invitation opens, restore normal scrolling.



==================================================

TECHNICAL REQUIREMENTS

==================================================



Use React + TypeScript.



Use Tailwind CSS for styling.



Use Framer Motion for the major animations.



Structure the application into reusable components:



- EnvelopeIntro

- WaxSeal

- Envelope

- InvitationReveal

- HeroSection

- CouplePhotos

- InvitationMessage

- EventDetails

- WeddingCard

- FloralDecorations

- Footer / RSVP



Keep the code clean and maintainable.



Do not put everything into one giant component.



Use CSS transforms and opacity for animations whenever possible.



Prioritize smooth 60fps animations.



Respect prefers-reduced-motion.



==================================================

IMPORTANT VISUAL RULE

==================================================



The screenshots are the source of truth for the visual design.



Do not "improve" the design by replacing it with a generic wedding landing page.



The goal is to make the Canva invitation feel like a real physical invitation that has come to life on the web.



Think:

"open a beautiful physical wedding invitation"



rather than:

"scroll through a wedding website."



The first 3 seconds should feel cinematic and premium.



==================================================

FINAL EXPERIENCE

==================================================



The complete flow should be:



Cream background

        ↓

Closed dark-green envelope

        ↓

Gold AA wax seal

        ↓

"TAP TO OPEN"

        ↓

User taps

        ↓

Wax seal lifts away

        ↓

Envelope flap opens

        ↓

Invitation card emerges

        ↓

Envelope fades/moves away

        ↓

Wedding invitation fills the viewport

        ↓

User scrolls through the complete invitation

        ↓

Smooth editorial animations reveal each section



Make this feel polished enough to be used as an actual wedding invitation website, not a prototype.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gilded-scroll-unveiled.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e26586f9-a397-4c18-a108-f01ecd0eacd8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
