//  Įdėsime, kur HTML kode yra aprašytas ID - fullpage

new fullpage('#fullpage', {
  // dabar įrašysime objektą, kurį norime aprašyti:
  // skirtingus PROPERTIES for įvairiems AMIMATION
  autoScrolling: true,
  // Padarome NAVigaciją: pasirodys tris "taškai" navigacijai šone, dešinėje
  navigation: true,
  easing: 'ease',
  //   sectionsColor: ['#ccc', '#fff', '#567ec2'],
  //  Dabar panaudosime METODĄ, vadinamą "ON LEAVE" su trimis parametrais:
  //    Kai norėsime iš vieno psl pereiti į kitą, vadinamam TRIGGER
  //   su ARROW funkcija ir parametrais: ORIGIN - pozicija iš kur "išeisime",
  //   tai yra, pirmas puslapis ir DESTINATION: kur mes atsirasime.
  //    DIRECTION, mes nenaudosime
  onLeave: (origin, destination, direction) => {
    //   Si TRIGGER, norime pasiekti skirtingas vietas:
    const section = destination.item;
    //  console.log(destination.item);  //  Žiūrime ar gauname kažką:
    //  Aprašome H-1 bendrai visom trim SECTION, kad būtų vienodas
    const title = section.querySelector('h1');
    //    Pridėsime "užlaikymą" (DELAY) objektą, truputį:
    const tl = new TimelineMax({
      delay: 0.5,
    });
    //   Pirmas bus PRADŽIA: nustatome pozicija iš kur "pradėsime" ir į "kur".
    //   Antras parametras bus DURATION
    //   ir Y bus pozicija lygi = 50.
    //   ANTRAS bus pabaiga: objekto pozicija bus 0, ir permatomumas = 1
    tl.fromTo(title, 0.9, { y: '90', opacity: 0 }, { y: 0, opacity: 1 });

    //  Jei norime pridėti dar kažkokią animaciją texto ir t.t.
    //  Pirmo puslapio pozicija bus = 0, antro psl = 1, trečio = 2, ir t.t.

    //  Čia pradėsime pirmos SECTION aprašymą:

    if (destination.index === 1) {
      //  Jei norime pasirinkti visus kitus elementus
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');

      //     su objektu {} || "Iššliaužia" nuotrauka ir tekstas su "užlaikymu"
      //     Pradedame animacijos aprašymą
      //   pirmas bus "užlaikymo" laikas, o toliau IMG turi "išslinkti" iš dešinės:
      //    '150% bus iš kurios "pozicijos" "išslinks" IMG iš dešinės pus

      tl.fromTo(chairs, 0.6, { x: '230%' }, { x: '-35%' })
        //  paimsime pirmą "kėdės" poziciją, tai bus pirma nuotrauka:
        // .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        //    Jeigu norime pridėti teksto animaciją su "užlaikymu":
        .fromTo(description, 0.4, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        //   Antro puslapio nuotrauka "kėdė", turi atsirasti iš dešinio šono:
        .fromTo(chairs[0], 0.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 3, { opacity: 0 }, { opacity: 1 });
    }

    //  ========================================================================
    //                          Trecias skyrius
    //  ========================================================================

    //  tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
    if (destination.index === 2) {
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');

      tl.fromTo(chairs, 0.7, { x: '230%' }, { x: '-35%' })
        // .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        //    Jeigu norime pridėti teksto animaciją su "užlaikymu":
        .fromTo(description, 0.4, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(chairs[3], 1.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[4], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[5], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[6], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[7], 2, { opacity: 0 }, { opacity: 1 });
    }

    // ==========================================================================
    //                  Ketvirtas skytius bandomasis
    //  ========================================================================

    //  tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });
    if (destination.index === 3) {
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');

      tl.fromTo(chairs, 0.7, { x: '230%' }, { x: '-35%' })
        // .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        //    Jeigu norime pridėti teksto animaciją su "užlaikymu":
        .fromTo(description, 0.4, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(chairs[3], 1.5, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[4], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[5], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[6], 2, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[7], 2, { opacity: 0 }, { opacity: 1 });
    }

    // ==========================================================================
  },
});

//   "https://cdnjs.com/libraries/gsap"
