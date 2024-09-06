const sql = require('better-sqlite3');
const db = sql('recipes.db');

const dummyMeals = [
  {
    title: 'Soy wax candle',
    slug: 'soy-wax-candle',
    image: '/images/candle.jpg',
    summary:
      'Basic recipe and method to create your own soy wax candle.',
    instructions: `
    1.Prepare Your Work Area: Clean and sanitize your equipment and work surface. Cover your work area with newspaper or paper towels to protect from spills.

    2.Prepare the Container: Attach the wick to the bottom of the container using a wick sticker or a dab of melted wax. Use a wick holder or secure the top of the wick with chopsticks or similar to keep it centered and straight.
    
    3.Melt the Soy Wax: In a double boiler or a heat-safe container placed in a saucepan of simmering water, melt the soy wax flakes. Heat the wax gently over medium heat until completely melted, stirring occasionally. Use a thermometer to monitor the temperature; soy wax should be heated to around 170-180°F (77-82°C).
    
    4.Add Fragrance and Color (Optional):
    
    Once the wax is melted, remove it from heat and let it cool for a few minutes.
    Add fragrance oil or essential oil to the melted wax. Stir gently and thoroughly to distribute the fragrance evenly. Use approximately 1 ounce of fragrance oil per pound of wax, but adjust according to your preference for scent strength.
    If you wish to add color, you can stir in candle dye chips or shavings from a crayon at this stage. Add a small amount at a time until you achieve the desired color intensity. Remember that soy wax tends to produce lighter colors compared to other waxes.
    5.Pour the Wax: Carefully pour the scented and colored wax into your prepared container. Leave a small amount of wax (about 1/2 inch) from the top of the container to prevent overflow.
    
    6.Set the Wick: Allow the candle to cool and harden completely at room temperature. This may take several hours, depending on the size of your candle.
    
    7.Trim the Wick: Once the candle has fully cooled and hardened, trim the wick to about 1/4 inch above the surface of the wax.
    
    8.Cure the Candle: Let the candle cure for at least 24-48 hours before burning. This allows the fragrance to fully blend with the wax for optimal scent throw.
    
    9.Burn and Enjoy: When ready to use, light the candle and enjoy the warm glow and lovely fragrance of your homemade soy wax candle.
    `,
    creator: 'Polina Lisitsa',
    creator_email: 'lisitsa.p.e@gmail.com',
  },
  {
    title: 'Mint lip balm',
    slug: 'mint-lip-balm',
    image: '/images/mint balm.jpg',
    summary:
      'Refreshing mint lip balm recipe',
    instructions: `
      1. Prepare Your Work Area: Clean and sanitize your equipment and work surface to ensure cleanliness.

      2. Melt the Ingredients:

      In a double boiler or a heat-safe bowl placed over a saucepan of simmering water, melt the beeswax pellets, coconut oil, and shea butter together.
      Stir occasionally until completely melted and combined.

      3. Add Essential Oil: Once melted, remove from heat and let it cool slightly. 
      Add 5-10 drops of peppermint essential oil (adjust to your preference for mintiness) and stir well to combine.

      4. Pour into Containers: Carefully pour the melted mixture into lip balm containers or small tins. 
      Work quickly before the mixture starts to solidify.

      5.Cool and Set: Allow the lip balm to cool and set completely at room temperature.
      This usually takes about 30 minutes to an hour, depending on the temperature of your room.
      
      6.Label and Store: Once cooled and solidified, label your containers with the date and type of lip balm. Store them in a cool, dry place away from direct sunlight.
    `,
    creator: 'Polina Lisitsa',
    creator_email: 'lisitsa.p.e@gmail.com',
  },
  {
    title: 'Marble soap',
    slug: 'marble-soap',
    image: '/images/marble soap.jpg',
    summary:
      'Basic recipe and method for making marble soap at home.',
    instructions: `
    1.Prepare Your Work Area: Clean and sanitize all equipment and work surfaces before you begin.

    2.Cut Soap Base: Cut both the clear and white glycerin soap bases into small cubes or chunks. Divide each into equal portions if you plan to make multiple colors.
    
    3.Melt Soap Bases: Melt the clear and white glycerin soap bases separately. You can melt them using a microwave-safe bowl in short bursts or in a double boiler on the stove until completely melted and smooth.
    
    4.Add Colorants: Once melted, add soap colorants or mica powders to each bowl of melted soap base. Use colors like black, grey, or any other color you prefer for a marble effect. Stir well to ensure the color is evenly distributed.
    
    5.Optional: Add Fragrance: If desired, add fragrance oil or essential oil to each bowl of melted soap base and stir well to incorporate. Use scents that complement each other or opt for an unscented soap if you prefer.
    
    6.Pour Soap into Mold: Pour the colored soap bases randomly into the soap mold. Alternate between the clear and colored soap bases to create layers. Pour from different heights and angles to achieve a more natural marble effect.
    
    7.Swirl the Soap: Use a toothpick or skewer to swirl the colors together gently. Create random swirls or patterns to mimic the veins in marble.
    
    8.Spritz with Rubbing Alcohol: Spritz the surface of the soap with rubbing alcohol to eliminate any bubbles that may have formed.
    
    9.Let Soap Set: Allow the soap to cool and harden completely at room temperature. This typically takes a few hours.
    
    10.Unmold and Cut: Once fully hardened, carefully unmold the soap slab and cut it into individual bars using a sharp knife. You can cut them into rectangular or square bars, depending on your preference.
    
    11.Cure the Soap: Place the cut bars on a drying rack or parchment paper and allow them to cure for 4-6 weeks. This curing time ensures a harder, longer-lasting bar of soap.
    
    12.Wrap and Store: Once cured, wrap the bars in wax paper or plastic wrap to protect them from moisture and store them in a cool, dry place until ready to use or gift.
    `,
    creator: 'Polina Lisitsa',
    creator_email: 'lisitsa.p.e@gmail.com',
  },
  {
    title: 'Chocolate lip balm',
    slug: 'chocolate-lip-balm',
    image: '/images/balsamo.jpg',
    summary:
      "Sweet and soft chocolate lip balm.",
    instructions: `
      1. Prepare Your Work Area: Clean and sanitize your equipment and work surface.

      2.Melt the Ingredients:
      
      3.In a double boiler or a heat-safe bowl placed over a saucepan of simmering water, melt the beeswax pellets, cocoa butter, and coconut oil together. Stir occasionally until fully melted and combined.
      Add Cocoa Powder and Vitamin E Oil: Once melted, remove from heat and let it cool slightly. Stir in the cocoa powder and vitamin E oil until well incorporated. This will give your lip balm a chocolate scent and a hint of color.
      
      4.Optional: Add Essential Oil: If you want a stronger chocolate fragrance, add 5-10 drops of chocolate or vanilla essential oil. Stir well to combine.
      
      5.Pour into Containers: Carefully pour the melted mixture into lip balm containers or small tins. Work quickly before it starts to solidify.
      
      6.Cool and Set: Allow the lip balm to cool and set completely at room temperature. This typically takes about 30 minutes to an hour.
      
      7.Label and Store: Once cooled and solidified, label your containers with the date and type of lip balm. Store them in a cool, dry place away from direct sunlight.
    `,
   
    creator: 'Polina Lisitsa',
    creator_email: 'lisitsa.p.e@gmail.com',
  },
 
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS recipes (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO recipes VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();