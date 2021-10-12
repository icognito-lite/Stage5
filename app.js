let row=[
  {
      image: 'audir8',
      name:'Audi R8',
      price:'$164 000',
      description: 'The R8 Performance has 611 HP (620 PS / 456 kW) and 428 lb-ft (580 Nm) of torque produced by the naturally aspirated 5.2-liter V10 engine. The facelift, which came out in the fourth quarter of 2018, brought revised looks, new color options for the cockpit, an upgraded suspension that improves handling, retuned standard power steering and optional dynamic steering, and enhanced electronic stability control (ESC).'

  },
  {
      
    image: 'ford raptor',
    name:"Ford Raptor",
    price:'$85 840',
    description: 'The 2020 Ford Raptor features a twin-turbocharged high-output 3.5L EcoBoost V6 engine that dishes out 450 horsepower and 510 lb-ft of torque. This Ford Raptor engine pairs to a paddle-shifted 10-speed automatic transmission to offer a smooth performance both on and off-road.'

  },
  {
      
    image: 'g wagon',
    name:"G Wagon",
    price:'$131 000',
    description: 'This vehicle practically defies all laws of gravity, able to do things such as scream down a mountain at 60 MPH and stay intact once you reach the bottom. The G-Wagon offers a superior level of capability and durability that you will not find on any other vehicle'

  },
  {
      
    image: 'm3f80',
    name:"M3 F80",
    price:'$55 000',
    description: 'the M3’s straight-six certainly doesn’t feel or sound like an engine that originally saw service in a performance SUV. A handbuilt in-line four or a CSL’s straight-six it might not be, but it’s streets ahead of the F80 M3’s powerplant both in terms of first impressions and what it’s capable of. '

  },
  {
      
    image: 'm5 f90',
    name:"M5 F90",
    price:'$130 000',
    description: 'the new BMW M5 is a 4.4-litre V8 bi-turbo engine with M TwinPower Turbo technology. The M engineers have carried out significant revisions to the outgoing model’s power unit. '

  },
  {
      
    image: 'porsche 911',
    name:"Porsche 911",
    price:'$99 000',
    description: 'Along with a 473-hp version of the lineups ubiquitous twin-turbo flat-six, its available with an eight-speed automatic or seven-speed manual transmission and rear- or all-wheel drive. The GTS is offered in all three body styles, too'

  },
  {
      
    image: 'porsche cayenne',
    name:"Porsche Cayenne",
    price:'$127 000',
    description: 'Never settling for second best, constantly giving your all and always ahead of the game: the Cayenne Turbo GT is defined by motorsport performance. Always prepared, with a burning desire to deploy its maximum power and enthusiastically accelerate into the next bend. Just like a true athlete – and as you would expect from a Porsche.'

  },
  {
      
    image: 'r35',
    name:"GTR R35",
    price:'$113 000',
    description: 'Never settling for second best, constantly giving your all and always ahead of the game: the Cayenne Turbo GT is defined by motorsport performance. Always prepared, with a burning desire to deploy its maximum power and enthusiastically accelerate into the next bend. Just like a true athlete – and as you would expect from a Porsche.'

  },
  {
      
    image: 'range rover hse sport',
    name:"Range Rover- HSE SPORT",
    price:'$70 000',
    description: 'Land Rover has trimmed the diesel and plug-in-hybrid powertrains from the Range Rover Sports lineup this year, leaving the turbocharged inline-six (available in two outputs) as the sole offering. Other than switching to this more simplified lineup, the only other change is new USB-C ports for charging and connecting devices.'

  },
  {
      
    image: 'range rover velar',
    name:"Range Rover-Velar",
    price:'$77 000',
    description: 'The Diesel engine is 1999 cc while the Petrol engine is 1997 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the Range Rover Velar has a mileage of 15.8 kmpl . The Range Rover Velar is a 5 seater.'

  },
  {
      
    image: 'supra',
    name:"Supra 2jz",
    price:'$45 000',
    description: '3.0-litre, in-line six-cylinder engine has all the ingredients to stimulate your senses. Equipped with a single, twin-scroll turbocharger, high-precision direct fuel injection and variable valve control, it delivers 340 DIN hp and 500 Nm of torque for an exhilarating charge to 100 km/h in 4.3 seconds and a top speed of 250 km/h.'

  }
];
let gallerySection= document.getElementById('section');
let html="";
row.forEach (e =>{
         html+=`
         <div class="col">
			  <div class="card">
				<img src="/images/${e.image}.jpg" class="card-img-top image" alt="car">
				<div class="card-body">
				  <h5 class="card-title name">${e.name}</h5>
				  <h5 class="price">${e.price}</h5>
				  <p class="card-text description">${e.description}</p>
				</div>
			  </div>
			</div>
    
         `
         gallerySection.innerHTML= html
         console.log(e)
    })
