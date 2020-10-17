const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

Database.then(async (db) => {
    //insert data into the database (just one orphanage)
    await saveOrphanage(db, {
        lat: "-27.2263379",
        lng: "-49.6446252",
        name: "Lar dos meninos",
        about:"Presta assistência a crianças de 06 a 17 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "47 99258-1704",
        images: [
            "https://images.unsplash.com/photo-1600468448005-67286e81341b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      
            "https://images.unsplash.com/photo-1600340450226-8e186bf4208d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
          ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 9h às 19h",
        open_on_weekends: "0"
    });

    /*
    //QUERYS
    //consult all the orphanages
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);
    
    //consult only one orphanage (WHERE id = "x")
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
    console.log(orphanage);
    
    //delete orphanage
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'));
    */
});
