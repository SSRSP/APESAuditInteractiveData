//const Snap = require('/Snap.svg-0.5.1/dist/snap.svg.js');
var getCSSVar = function (CSSVar) {
    return getComputedStyle(document.body).getPropertyValue(CSSVar);
};

var setCSSVar = function (CSSVar, value) {
    document.body.style.setProperty(CSSVar, value);
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
Array.prototype.unique = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};
Array.prototype.uniqueInCategory = function(category) {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i][category]) == -1) {
            unique.push(this[i][category]);
        }
    }
    return unique;
};

class solutionCard {
  constructor(id, audit, description, implemented, toChange, changeBy, where, economicImpact, environmentalImpact, socialImpact) {
    this.id = id;
    this.audit = audit;
    this.title = description;
    this.implemented = implemented;
    this.toChange = toChange;
    this.changeBy = changeBy;
    this.where = where;
    this.economicImpact = economicImpact;
    this.environmentalImpact = environmentalImpact;
    this.socialImpact = environmentalImpact;
  }
}

var solutions = {
  "Electricity": [  
    new solutionCard(0, "Electricity", "Decrease Usage of Frequently Used Lights (Lights used for more than 3.5 hours per day) By 1.5 Hours Each Day", false, "Total Mins/Week+Weekend", "-60",[{"column": "Room", "compare":"==", "value": "Bathroom"}], "eco impact", "env impact", "social impact"),
    new solutionCard(1, "Electricity", "Turn Off Monitors and TVs When Not In Use", false, "Total Mins/Week+Weekend", "-60",[{"column": "Room", "compare":"==", "value": "Bathroom"}], "eco impact", "env impact", "social impact"),
    new solutionCard(2, "Electricity", "Turn Down Air Conditioning and Use A Blanket Instead Sometimes", false, "Total Mins/Week+Weekend", "-60",[{"column": "Room", "compare":"==", "value": "Bathroom"}], "eco impact", "env impact", "social impact")
    ],
  "Water": [
    new solutionCard(0, "Water", "Spend Less Time In The Shower. Reduce by 20 Minutes Per Day", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(1, "Water", "Less Laundry. 2 Less Loads Per Week. Try to Wash As Much As Possible At Once", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(2, "Water", "Run Kitchen Sinks for 2 Minutes Less Each Day", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(3, "Water", "Run Bathroom Sinks for 2 Less Minutes Each Day. Don't Have It Running While Doing Something Else", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact")
  ],
  "Transportation": [
    new solutionCard(0, "Transportation", "Combine Trips. For Example Go To The Bank And The Grocery Store In One Trip. Try To Do This Twice A Week.", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(1, "Transportation", "Car Pool. ", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(2, "Transportation", "Make Sure That The Next Car That We Buy (Probably When I Start Driving) Gets More Miles Per Gallon. This Card Will Not Change The Graph.", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact")
  ],
  "Waste": [
    new solutionCard(0, "Waste", "lorem ipsum blah blah blah blah cool words", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(1, "Waste", "lorem ipsum blah blah blah blah cool words", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact"),
    new solutionCard(2, "Waste", "lorem ipsum blah blah blah blah cool words", false, "Total Mins/Week+Weekend", "-60", "eco impact", "env impact", "social impact")
  ]
};



var audits = ['electricity', 'water', 'waste', 'transportation' ];
/*
function convertHex(hex){
    hex = hex.replace('#','');
    var r, g, b;
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    return {
      "red": r,
      "green": g,
      "blue": b
    };
}

var cssColorsToRGBA =function() {
  for (var i = 0; i < 4; i++) {
    setCSSVar(`--${audits[i]}-background-r`, convertHex(`--${audits[i]}-background`)["red"]);
    setCSSVar(`--${audits[i]}-background-g`, convertHex(`--${audits[i]}-background`)["green"]);
    setCSSVar(`--${audits[i]}-background-b`, convertHex(`--${audits[i]}-background`)["blue"]);
    setCSSVar(`--${audits[i]}-main-r`, convertHex(`--${audits[i]}-main`)["red"]);
    setCSSVar(`--${audits[i]}-main-g`, convertHex(`--${audits[i]}-main`)["green"]);
    setCSSVar(`--${audits[i]}-main-b`, convertHex(`--${audits[i]}-main`)["blue"]);
  }
};
cssColorsToRGBA();*/
var currentAudit = 'electricity';



var originalElectricityAuditData = [
  {
    "Room": "Bathroom",
    "Appliance": "Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 3,
    "Mins/Week": 180,
    "Days Per Weekend": 1,
    "Mins/Weekend": 60,
    "Total Hours/Week+Weekend": 4,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 0.7999999999999999,
    "kWh Per Day": 0.11428571428571428,
    "kWh Per Hour": 0.0047619047619047615,
    "Dollars Per Day": 0.010285714285714285
  },
  {
    "Room": "Bathroom",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 4,
    "Watts": 180,
    "Amps": 1.5,
    "Volts": 480,
    "Hours": 2,
    "Percent Of Day": 0.08333333333333333,
    "Days Per Week": 5,
    "Mins/Week": 600,
    "Days Per Weekend": 2,
    "Mins/Weekend": 240,
    "Total Hours/Week+Weekend": 14,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.18,
    "kWh Per Week": 0.84,
    "kWh Per Day": 0.12,
    "kWh Per Hour": 0.005,
    "Dollars Per Day": 0.010799999999999999
  },
  {
    "Room": "Dining Room",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 5,
    "Percent Of Day": 0.20833333333333334,
    "Days Per Week": 5,
    "Mins/Week": 1500,
    "Days Per Weekend": 2,
    "Mins/Weekend": 600,
    "Total Hours/Week+Weekend": 35,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 0.7000000000000001,
    "kWh Per Day": 0.1,
    "kWh Per Hour": 0.004166666666666667,
    "Dollars Per Day": 0.009
  },
  {
    "Room": "Guest Room",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 2,
    "Mins/Week": 120,
    "Days Per Weekend": 1,
    "Mins/Weekend": 60,
    "Total Hours/Week+Weekend": 3,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 0.06,
    "kWh Per Day": 0.008571428571428572,
    "kWh Per Hour": 0.00035714285714285714,
    "Dollars Per Day": 0.0007714285714285715
  },
  {
    "Room": "Hallway",
    "Appliance": "Lightbulb outside of sunporch",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 4,
    "Percent Of Day": 0.16666666666666666,
    "Days Per Week": 4,
    "Mins/Week": 1200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 480,
    "Total Hours/Week+Weekend": 28,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 0.5599999999999999,
    "kWh Per Day": 0.07999999999999999,
    "kWh Per Hour": 0.0033333333333333327,
    "Dollars Per Day": 0.007199999999999999
  },
  {
    "Room": "Hallway",
    "Appliance": "Fire Detector outside of sunporch",
    "Category": "Fire",
    "Number Of": 0,
    "Watts": 0,
    "Amps": 0,
    "Volts": 0,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Hallway",
    "Appliance": "Lightbulb outside of bathroom",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 3.36,
    "kWh Per Day": 0.48,
    "kWh Per Hour": 0.02,
    "Dollars Per Day": 0.043199999999999995
  },
  {
    "Room": "Hallway",
    "Appliance": "Weird Plant Light",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 11,
    "Amps": 0.09166666666666666,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.011,
    "kWh Per Week": 0.616,
    "kWh Per Day": 0.088,
    "kWh Per Hour": 0.0036666666666666666,
    "Dollars Per Day": 0.00792
  },
  {
    "Room": "Hallway",
    "Appliance": "House Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 1440,
    "Amps": 12,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 1,
    "Mins/Week": 180,
    "Days Per Weekend": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 3,
    "Total Mins/Week+Weekend": 0,
    "kW": 1.44,
    "kWh Per Week": 1.4400000000000002,
    "kWh Per Day": 0.20571428571428574,
    "kWh Per Hour": 0.008571428571428572,
    "Dollars Per Day": 0.018514285714285716
  },
  {
    "Room": "Hallway",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 11,
    "Percent Of Day": 0.4583333333333333,
    "Days Per Week": 5,
    "Mins/Week": 3000,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1320,
    "Total Hours/Week+Weekend": 72,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 1.4400000000000002,
    "kWh Per Day": 0.20571428571428574,
    "kWh Per Hour": 0.008571428571428572,
    "Dollars Per Day": 0.018514285714285716
  },
  {
    "Room": "Kitchen",
    "Appliance": "Can Lights",
    "Category": "Lighting",
    "Number Of": 8,
    "Watts": 88,
    "Amps": 0.7333333333333333,
    "Volts": 960,
    "Hours": 5,
    "Percent Of Day": 0.20833333333333334,
    "Days Per Week": 5,
    "Mins/Week": 1500,
    "Days Per Weekend": 2,
    "Mins/Weekend": 600,
    "Total Hours/Week+Weekend": 35,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.088,
    "kWh Per Week": 1.0266666666666666,
    "kWh Per Day": 0.14666666666666667,
    "kWh Per Hour": 0.006111111111111111,
    "Dollars Per Day": 0.0132
  },
  {
    "Room": "Kitchen",
    "Appliance": "Cooktop",
    "Category": "Kitchen Appliances",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 5,
    "Mins/Week": 300,
    "Days Per Weekend": 2,
    "Mins/Weekend": 120,
    "Total Hours/Week+Weekend": 7,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 1.4000000000000001,
    "kWh Per Day": 0.2,
    "kWh Per Hour": 0.008333333333333333,
    "Dollars Per Day": 0.018
  },
  {
    "Room": "Kitchen",
    "Appliance": "Ovens",
    "Category": "Kitchen Appliances",
    "Number Of": 2,
    "Watts": 6240,
    "Amps": 26,
    "Volts": 480,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 5,
    "Mins/Week": 300,
    "Days Per Weekend": 2,
    "Mins/Weekend": 120,
    "Total Hours/Week+Weekend": 7,
    "Total Mins/Week+Weekend": 0,
    "kW": 6.24,
    "kWh Per Week": 14.56,
    "kWh Per Day": 2.08,
    "kWh Per Hour": 0.08666666666666667,
    "Dollars Per Day": 0.1872
  },
  {
    "Room": "Kitchen",
    "Appliance": "Refrigerator",
    "Category": "Kitchen Appliances",
    "Number Of": 1,
    "Watts": 780,
    "Amps": 6.5,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.78,
    "kWh Per Week": 43.68,
    "kWh Per Day": 6.24,
    "kWh Per Hour": 0.26,
    "Dollars Per Day": 0.5616
  },
  {
    "Room": "Kitchen",
    "Appliance": "Various Appliances my father says",
    "Category": "Kitchen Appliances",
    "Number Of": 1,
    "Watts": 2160,
    "Amps": 18,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 5,
    "Mins/Week": 300,
    "Days Per Weekend": 2,
    "Mins/Weekend": 120,
    "Total Hours/Week+Weekend": 7,
    "Total Mins/Week+Weekend": 0,
    "kW": 2.16,
    "kWh Per Week": 5.04,
    "kWh Per Day": 0.72,
    "kWh Per Hour": 0.03,
    "Dollars Per Day": 0.0648
  },
  {
    "Room": "Laundry",
    "Appliance": "LED Light",
    "Category": "Lighting",
    "Number Of": 2,
    "Watts": 18,
    "Volts": 240,
    "Amps": 0,
    "Hours": 8,
    "Percent Of Day": 0.3333333333333333,
    "Days Per Week": 5,
    "Mins/Week": 3000,
    "Days Per Weekend": 2,
    "Mins/Weekend": 960,
    "Total Hours/Week+Weekend": 66,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.018,
    "kWh Per Week": 0.39599999999999996,
    "kWh Per Day": 0.056571428571428564,
    "kWh Per Hour": 0.0023571428571428567,
    "Dollars Per Day": 0.0050914285714285705
  },
  {
    "Room": "Laundry",
    "Appliance": "Washer+Driver",
    "Category": "Appliances",
    "Number Of": 1,
    "Watts": 7200,
    "Amps": 30,
    "Volts": 240,
    "Hours": 4,
    "Percent Of Day": 0.16666666666666666,
    "Days Per Week": 5,
    "Mins/Week": 1200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 480,
    "Total Hours/Week+Weekend": 28,
    "Total Mins/Week+Weekend": 0,
    "kW": 7.2,
    "kWh Per Week": 67.2,
    "kWh Per Day": 9.6,
    "kWh Per Hour": 0.39999999999999997,
    "Dollars Per Day": 0.864
  },
  {
    "Room": "Living Room",
    "Appliance": "TV",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 360,
    "Amps": 3,
    "Volts": 120,
    "Hours": 10,
    "Percent Of Day": 0.4166666666666667,
    "Days Per Week": 5,
    "Mins/Week": 2400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1200,
    "Total Hours/Week+Weekend": 60,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 7.199999999999999,
    "kWh Per Day": 1.0285714285714285,
    "kWh Per Hour": 0.04285714285714285,
    "Dollars Per Day": 0.09257142857142855
  },
  {
    "Room": "Living Room",
    "Appliance": "Computer",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 360,
    "Amps": 3,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 3,
    "Mins/Week": 180,
    "Days Per Weekend": 1,
    "Mins/Weekend": 60,
    "Total Hours/Week+Weekend": 4,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 0.48,
    "kWh Per Day": 0.06857142857142857,
    "kWh Per Hour": 0.002857142857142857,
    "Dollars Per Day": 0.006171428571428572
  },
  {
    "Room": "Living Room",
    "Appliance": "Can Lights",
    "Category": "Lighting",
    "Number Of": 10,
    "Watts": 110,
    "Amps": 0.9166666666666666,
    "Volts": 1200,
    "Hours": 10,
    "Percent Of Day": 0.4166666666666667,
    "Days Per Week": 5,
    "Mins/Week": 3000,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1200,
    "Total Hours/Week+Weekend": 70,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.11,
    "kWh Per Week": 2.566666666666667,
    "kWh Per Day": 0.3666666666666667,
    "kWh Per Hour": 0.015277777777777779,
    "Dollars Per Day": 0.033
  },
  {
    "Room": "Living Room",
    "Appliance": "Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Percent Of Day": 0.75,
    "Days Per Week": 5,
    "Mins/Week": 5400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2160,
    "Total Hours/Week+Weekend": 126,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 25.2,
    "kWh Per Day": 3.6,
    "kWh Per Hour": 0.15,
    "Dollars Per Day": 0.324
  },
  {
    "Room": "Living Room",
    "Appliance": "Receiver Stereo Thing",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Hours": 10,
    "Percent Of Day": 0.4166666666666667,
    "Days Per Week": 5,
    "Mins/Week": 2400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1200,
    "Total Hours/Week+Weekend": 60,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 12,
    "kWh Per Day": 1.7142857142857142,
    "kWh Per Hour": 0.07142857142857142,
    "Dollars Per Day": 0.15428571428571428
  },
  {
    "Room": "Mom Studio",
    "Appliance": "Lightbulbs",
    "Category": "Lighting",
    "Number Of": 9,
    "Watts": 99,
    "Amps": 0.825,
    "Volts": 1080,
    "Hours": 2,
    "Percent Of Day": 0.08333333333333333,
    "Days Per Week": 5,
    "Mins/Week": 1800,
    "Days Per Weekend": 2,
    "Mins/Weekend": 240,
    "Total Hours/Week+Weekend": 34,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.099,
    "kWh Per Week": 1.122,
    "kWh Per Day": 0.1602857142857143,
    "kWh Per Hour": 0.0066785714285714295,
    "Dollars Per Day": 0.014425714285714287
  },
  {
    "Room": "Mom Studio",
    "Appliance": "Art Lights",
    "Category": "Art",
    "Number Of": 2,
    "Watts": 1440,
    "Amps": 12,
    "Volts": 240,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 4,
    "Mins/Week": 960,
    "Days Per Weekend": 1,
    "Mins/Weekend": 60,
    "Total Hours/Week+Weekend": 17,
    "Total Mins/Week+Weekend": 0,
    "kW": 1.44,
    "kWh Per Week": 8.16,
    "kWh Per Day": 1.1657142857142857,
    "kWh Per Hour": 0.04857142857142857,
    "Dollars Per Day": 0.10491428571428571
  },
  {
    "Room": "Mom Studio",
    "Appliance": "Projector",
    "Category": "Art",
    "Number Of": 0,
    "Watts": 0,
    "Amps": 0,
    "Volts": 0,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Outside",
    "Appliance": "Ring Doorbell",
    "Category": "Devices",
    "Number Of": 1,
    "Watts": 120,
    "Amps": 1,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.12,
    "kWh Per Week": 6.72,
    "kWh Per Day": 0.96,
    "kWh Per Hour": 0.04,
    "Dollars Per Day": 0.08639999999999999
  },
  {
    "Room": "Outside",
    "Appliance": "Wall Lights",
    "Category": "Lighting",
    "Number Of": 9,
    "Watts": 81,
    "Amps": 0.6749999999999999,
    "Volts": 1080,
    "Hours": 5,
    "Percent Of Day": 0.20833333333333334,
    "Days Per Week": 5,
    "Mins/Week": 1500,
    "Days Per Weekend": 2,
    "Mins/Weekend": 600,
    "Total Hours/Week+Weekend": 35,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.081,
    "kWh Per Week": 0.945,
    "kWh Per Day": 0.13499999999999998,
    "kWh Per Hour": 0.005624999999999999,
    "Dollars Per Day": 0.012149999999999998
  },
  {
    "Room": "Outside",
    "Appliance": "String Lights",
    "Category": "Lighting",
    "Number Of": 48,
    "Watts": 528,
    "Amps": 4.3999999999999995,
    "Volts": 5760,
    "Hours": 5,
    "Percent Of Day": 0.20833333333333334,
    "Days Per Week": 5,
    "Mins/Week": 1500,
    "Days Per Weekend": 2,
    "Mins/Weekend": 600,
    "Total Hours/Week+Weekend": 35,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.528,
    "kWh Per Week": 6.16,
    "kWh Per Day": 0.88,
    "kWh Per Hour": 0.03666666666666667,
    "Dollars Per Day": 0.07919999999999999
  },
  {
    "Room": "Outside",
    "Appliance": "Motion Lights",
    "Category": "Lighting",
    "Number Of": 6,
    "Watts": 450,
    "Amps": 3.75,
    "Volts": 720,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 5,
    "Mins/Week": 300,
    "Days Per Weekend": 2,
    "Mins/Weekend": 120,
    "Total Hours/Week+Weekend": 7,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.45,
    "kWh Per Week": 1.05,
    "kWh Per Day": 0.15,
    "kWh Per Hour": 0.0062499999999999995,
    "Dollars Per Day": 0.0135
  },
  {
    "Room": "Outside",
    "Appliance": "Mailbox Light",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 11,
    "Amps": 0.09166666666666666,
    "Volts": 120,
    "Hours": 3,
    "Percent Of Day": 0.125,
    "Days Per Week": 5,
    "Mins/Week": 900,
    "Days Per Weekend": 2,
    "Mins/Weekend": 360,
    "Total Hours/Week+Weekend": 21,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.011,
    "kWh Per Week": 0.077,
    "kWh Per Day": 0.011,
    "kWh Per Hour": 0.0004583333333333333,
    "Dollars Per Day": 0.00099
  },
  {
    "Room": "Outside",
    "Appliance": "Fountain Lights",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 360,
    "Amps": 3,
    "Volts": 120,
    "Hours": 9,
    "Percent Of Day": 0.375,
    "Days Per Week": 5,
    "Mins/Week": 2700,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1080,
    "Total Hours/Week+Weekend": 63,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 7.56,
    "kWh Per Day": 1.0799999999999998,
    "kWh Per Hour": 0.04499999999999999,
    "Dollars Per Day": 0.09719999999999998
  },
  {
    "Room": "Outside",
    "Appliance": "HVAC Unit",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 6000,
    "Amps": 50,
    "Volts": 120,
    "Hours": 6,
    "Percent Of Day": 0.25,
    "Days Per Week": 5,
    "Mins/Week": 1800,
    "Days Per Weekend": 2,
    "Mins/Weekend": 720,
    "Total Hours/Week+Weekend": 42,
    "Total Mins/Week+Weekend": 0,
    "kW": 6,
    "kWh Per Week": 84,
    "kWh Per Day": 12,
    "kWh Per Hour": 0.5,
    "Dollars Per Day": 1.08
  },
  {
    "Room": "Outside",
    "Appliance": "Fountain Pump",
    "Category": "Appliances",
    "Number Of": 1,
    "Watts": 180,
    "Amps": 1.5,
    "Volts": 120,
    "Hours": 18,
    "Percent Of Day": 0.75,
    "Days Per Week": 5,
    "Mins/Week": 5400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2160,
    "Total Hours/Week+Weekend": 126,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.18,
    "kWh Per Week": 7.56,
    "kWh Per Day": 1.0799999999999998,
    "kWh Per Hour": 0.04499999999999999,
    "Dollars Per Day": 0.09719999999999998
  },
  {
    "Room": "Pantry",
    "Appliance": "Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 240,
    "Amps": 2,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.24,
    "kWh Per Week": 13.44,
    "kWh Per Day": 1.92,
    "kWh Per Hour": 0.08,
    "Dollars Per Day": 0.17279999999999998
  },
  {
    "Room": "Pantry",
    "Appliance": "lightbulb",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 3.36,
    "kWh Per Day": 0.48,
    "kWh Per Hour": 0.02,
    "Dollars Per Day": 0.043199999999999995
  },
  {
    "Room": "Pantry",
    "Appliance": "House Vacuum",
    "Category": "Vacuum",
    "Number Of": 1,
    "Watts": 1560,
    "Amps": 13,
    "Volts": 120,
    "Hours": 1,
    "Percent Of Day": 0.041666666666666664,
    "Days Per Week": 5,
    "Mins/Week": 300,
    "Days Per Weekend": 1,
    "Mins/Weekend": 60,
    "Total Hours/Week+Weekend": 6,
    "Total Mins/Week+Weekend": 0,
    "kW": 1.56,
    "kWh Per Week": 3.1199999999999997,
    "kWh Per Day": 0.4457142857142857,
    "kWh Per Hour": 0.01857142857142857,
    "Dollars Per Day": 0.040114285714285706
  },
  {
    "Room": "Pantry",
    "Appliance": "Refrigerator",
    "Category": "Kitchen Appliances",
    "Number Of": 1,
    "Watts": 780,
    "Amps": 6.5,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.78,
    "kWh Per Week": 43.68,
    "kWh Per Day": 6.24,
    "kWh Per Hour": 0.26,
    "Dollars Per Day": 0.5616
  },
  {
    "Room": "Parents Bathroom",
    "Appliance": "Wall Lights",
    "Category": "Lighting",
    "Number Of": 6,
    "Watts": 66,
    "Amps": 0.5499999999999999,
    "Volts": 720,
    "Hours": 10,
    "Percent Of Day": 0.4166666666666667,
    "Days Per Week": 5,
    "Mins/Week": 3000,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1200,
    "Total Hours/Week+Weekend": 70,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.066,
    "kWh Per Week": 1.54,
    "kWh Per Day": 0.22,
    "kWh Per Hour": 0.009166666666666667,
    "Dollars Per Day": 0.019799999999999998
  },
  {
    "Room": "Parents Bathroom",
    "Appliance": "Shower Fan + Light",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 840,
    "Amps": 7,
    "Volts": 120,
    "Minutes": 30,
    "Hours": 1,
    "Percent Of Day": 0.0625,
    "Days Per Week": 5,
    "Mins/Week": 450,
    "Days Per Weekend": 2,
    "Mins/Weekend": 180,
    "Total Hours/Week+Weekend": 10,
    "Total Mins/Week+Weekend": 30,
    "kW": 0.84,
    "kWh Per Week": 2.94,
    "kWh Per Day": 0.42,
    "kWh Per Hour": 0.017499999999999998,
    "Dollars Per Day": 0.0378
  },
  {
    "Room": "Parents Bathroom",
    "Appliance": "Toilet Fan + Light",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 840,
    "Amps": 7,
    "Volts": 120,
    "Hours": 3,
    "Percent Of Day": 0.125,
    "Days Per Week": 5,
    "Mins/Week": 900,
    "Days Per Weekend": 2,
    "Mins/Weekend": 360,
    "Total Hours/Week+Weekend": 21,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.84,
    "kWh Per Week": 5.88,
    "kWh Per Day": 0.84,
    "kWh Per Hour": 0.034999999999999996,
    "Dollars Per Day": 0.0756
  },
  {
    "Room": "Parents Bathroom",
    "Appliance": "Curling Iron",
    "Category": "Devices",
    "Number Of": 1,
    "Watts": 80,
    "Amps": 0.6666666666666666,
    "Volts": 120,
    "Hours": 0,
    "Percent Of Day": 0,
    "Days Per Week": 1,
    "Mins/Week": 60,
    "Days Per Weekend": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 1,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.08,
    "kWh Per Week": 0.02666666666666667,
    "kWh Per Day": 0.00380952380952381,
    "kWh Per Hour": 0.00015873015873015876,
    "Dollars Per Day": 0.0003428571428571429
  },
  {
    "Room": "Parents Bathroom",
    "Appliance": "Closet Light",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 6,
    "Percent Of Day": 0.25,
    "Days Per Week": 5,
    "Mins/Week": 1800,
    "Days Per Weekend": 2,
    "Mins/Weekend": 720,
    "Total Hours/Week+Weekend": 42,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 0.84,
    "kWh Per Day": 0.12,
    "kWh Per Hour": 0.005,
    "Dollars Per Day": 0.010799999999999999
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Can Lights",
    "Category": "Lighting",
    "Number Of": 6,
    "Watts": 66,
    "Amps": 0.5499999999999999,
    "Volts": 720,
    "Hours": 8,
    "Percent Of Day": 0.3333333333333333,
    "Days Per Week": 5,
    "Mins/Week": 2400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 960,
    "Total Hours/Week+Weekend": 56,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.066,
    "kWh Per Week": 1.232,
    "kWh Per Day": 0.176,
    "kWh Per Hour": 0.007333333333333333,
    "Dollars Per Day": 0.01584
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Fan Lights ",
    "Category": "Lighting",
    "Number Of": 4,
    "Watts": 160,
    "Amps": 1.3333333333333333,
    "Volts": 480,
    "Hours": 8,
    "Percent Of Day": 0.3333333333333333,
    "Days Per Week": 5,
    "Mins/Week": 2400,
    "Days Per Weekend": 2,
    "Mins/Weekend": 960,
    "Total Hours/Week+Weekend": 56,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.16,
    "kWh Per Week": 2.986666666666667,
    "kWh Per Day": 0.4266666666666667,
    "kWh Per Hour": 0.017777777777777778,
    "Dollars Per Day": 0.038400000000000004
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Hours": 12,
    "Percent Of Day": 0.5,
    "Days Per Week": 3,
    "Mins/Week": 2340,
    "Days Per Weekend": 1,
    "Mins/Weekend": 720,
    "Total Hours/Week+Weekend": 51,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 10.2,
    "kWh Per Day": 1.457142857142857,
    "kWh Per Hour": 0.060714285714285714,
    "Dollars Per Day": 0.13114285714285714
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Lamps",
    "Category": "Lighting",
    "Number Of": 2,
    "Watts": 22,
    "Amps": 0.18333333333333332,
    "Volts": 240,
    "Hours": 3,
    "Percent Of Day": 0.125,
    "Days Per Week": 5,
    "Mins/Week": 900,
    "Days Per Weekend": 2,
    "Mins/Weekend": 360,
    "Total Hours/Week+Weekend": 21,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.022,
    "kWh Per Week": 0.154,
    "kWh Per Day": 0.022,
    "kWh Per Hour": 0.0009166666666666666,
    "Dollars Per Day": 0.00198
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Phone Chargers",
    "Category": "Devices",
    "Number Of": 2,
    "Watts": 360,
    "Amps": 3,
    "Volts": 240,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 20.16,
    "kWh Per Day": 2.88,
    "kWh Per Hour": 0.12,
    "Dollars Per Day": 0.2592
  },
  {
    "Room": "Parents Bedroom",
    "Appliance": "Alarm Clock",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 15,
    "Amps": 2,
    "Volts": 7.5,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.015,
    "kWh Per Week": 0.84,
    "kWh Per Day": 0.12,
    "kWh Per Hour": 0.005,
    "Dollars Per Day": 0.010799999999999999
  },
  {
    "Room": "Parents Office",
    "Appliance": "Lightbulbs",
    "Category": "Lighting",
    "Number Of": 6,
    "Watts": 66,
    "Amps": 0.5499999999999999,
    "Volts": 720,
    "Hours": 10,
    "Percent Of Day": 0.4166666666666667,
    "Days Per Week": 5,
    "Mins/Week": 3000,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1200,
    "Total Hours/Week+Weekend": 70,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.066,
    "kWh Per Week": 1.54,
    "kWh Per Day": 0.22,
    "kWh Per Hour": 0.009166666666666667,
    "Dollars Per Day": 0.019799999999999998
  },
  {
    "Room": "Parents Office",
    "Appliance": "Big Light",
    "Category": "Lighting",
    "Number Of": 2,
    "Watts": 16,
    "Amps": 0.13333333333333333,
    "Volts": 240,
    "Percent Of Day": 0.01,
    "Days Per Week": 5,
    "Mins/Week": 72,
    "Days Per Weekend": 2,
    "Mins/Weekend": 28.8,
    "Total Hours/Week+Weekend": 1,
    "Total Mins/Week+Weekend": 40.8,
    "kW": 0.016,
    "kWh Per Week": 0.008960000000000001,
    "kWh Per Day": 0.00128,
    "kWh Per Hour": 0.00005333333333333334,
    "Dollars Per Day": 0.00011520000000000001
  },
  {
    "Room": "Parents Office",
    "Appliance": "AT&T Router 5268AC",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 36,
    "Amps": 3,
    "Volts": 12,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.036,
    "kWh Per Week": 2.0159999999999996,
    "kWh Per Day": 0.2879999999999999,
    "kWh Per Hour": 0.011999999999999997,
    "Dollars Per Day": 0.02591999999999999
  },
  {
    "Room": "Parents Office",
    "Appliance": "Network Switch JGS524",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 120,
    "Amps": 1,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.12,
    "kWh Per Week": 6.72,
    "kWh Per Day": 0.96,
    "kWh Per Hour": 0.04,
    "Dollars Per Day": 0.08639999999999999
  },
  {
    "Room": "Parents Office",
    "Appliance": "Air Thing",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 780,
    "Amps": 5.2,
    "Volts": 150,
    "Percent Of Day": 0.5,
    "Days Per Week": 5,
    "Mins/Week": 3600,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1440,
    "Total Hours/Week+Weekend": 84,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.78,
    "kWh Per Week": 21.84,
    "kWh Per Day": 3.12,
    "kWh Per Hour": 0.13,
    "Dollars Per Day": 0.2808
  },
  {
    "Room": "Parents Office",
    "Appliance": "Dad PC",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 360,
    "Amps": 3,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 20.16,
    "kWh Per Day": 2.88,
    "kWh Per Hour": 0.12,
    "Dollars Per Day": 0.2592
  },
  {
    "Room": "Parents Office",
    "Appliance": "Dad PC Sleep Mode",
    "Category": "Computer",
    "Number Of": 0,
    "Watts": 0,
    "Amps": 0,
    "Volts": 0,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Parents Office",
    "Appliance": "HP L1906 Monitor",
    "Category": "Computer",
    "Number Of": 2,
    "Watts": 360,
    "Amps": 3,
    "Volts": 240,
    "Percent Of Day": 0.2,
    "Days Per Week": 4,
    "Mins/Week": 1152,
    "Days Per Weekend": 2,
    "Mins/Weekend": 576,
    "Total Hours/Week+Weekend": 28,
    "Total Mins/Week+Weekend": 48,
    "kW": 0.36,
    "kWh Per Week": 3.456,
    "kWh Per Day": 0.4937142857142857,
    "kWh Per Hour": 0.02057142857142857,
    "Dollars Per Day": 0.04443428571428571
  },
  {
    "Room": "Parents Office",
    "Appliance": "INSIGNIA Speaker 13F24A",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 240,
    "Amps": 2,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.24,
    "kWh Per Week": 13.44,
    "kWh Per Day": 1.92,
    "kWh Per Hour": 0.08,
    "Dollars Per Day": 0.17279999999999998
  },
  {
    "Room": "Parents Office",
    "Appliance": "LaserJet 5000 GN Printer",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 600,
    "Amps": 5,
    "Volts": 120,
    "Percent Of Day": 0.3,
    "Days Per Week": 3,
    "Mins/Week": 1296,
    "Days Per Weekend": 2,
    "Mins/Weekend": 864,
    "Total Hours/Week+Weekend": 36,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.6,
    "kWh Per Week": 7.199999999999999,
    "kWh Per Day": 1.0285714285714285,
    "kWh Per Hour": 0.04285714285714285,
    "Dollars Per Day": 0.09257142857142855
  },
  {
    "Room": "Parents Office",
    "Appliance": "LG 22EA53 Monitor",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 24.7,
    "Amps": 1.3,
    "Volts": 19,
    "Percent Of Day": 0.5,
    "Days Per Week": 5,
    "Mins/Week": 2880,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1440,
    "Total Hours/Week+Weekend": 72,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.0247,
    "kWh Per Week": 0.5928,
    "kWh Per Day": 0.08468571428571428,
    "kWh Per Hour": 0.0035285714285714282,
    "Dollars Per Day": 0.007621714285714285
  },
  {
    "Room": "Parents Office",
    "Appliance": "Acer 5200HQL Monitor",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 30.020000000000003,
    "Amps": 1.58,
    "Volts": 19,
    "Percent Of Day": 0.5,
    "Days Per Week": 5,
    "Mins/Week": 2880,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1440,
    "Total Hours/Week+Weekend": 72,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.03002,
    "kWh Per Week": 0.7204800000000001,
    "kWh Per Day": 0.1029257142857143,
    "kWh Per Hour": 0.004288571428571429,
    "Dollars Per Day": 0.009263314285714287
  },
  {
    "Room": "Parents Office",
    "Appliance": "Mom PC Using",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 360,
    "Amps": 3,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.36,
    "kWh Per Week": 20.16,
    "kWh Per Day": 2.88,
    "kWh Per Hour": 0.12,
    "Dollars Per Day": 0.2592
  },
  {
    "Room": "Parents Office",
    "Appliance": "Mom PC Sleep Mode",
    "Category": "Computer",
    "Number Of": 0,
    "Watts": 0,
    "Amps": 0,
    "Volts": 0,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Parents Office",
    "Appliance": "Fire Detector",
    "Category": "Fire",
    "Number Of": 1,
    "Watts": 0,
    "Amps": 0,
    "Volts": 0,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Sam Office",
    "Appliance": "Smart Bulb",
    "Category": "Lighting",
    "Number Of": 4,
    "Watts": 40,
    "Amps": 0.3333333333333333,
    "Volts": 480,
    "Hours": 9,
    "Percent Of Day": 0.375,
    "Days Per Week": 5,
    "Mins/Week": 1800,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1080,
    "Total Hours/Week+Weekend": 48,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.04,
    "kWh Per Week": 0.64,
    "kWh Per Day": 0.09142857142857143,
    "kWh Per Hour": 0.0038095238095238095,
    "Dollars Per Day": 0.008228571428571429
  },
  {
    "Room": "Sam Office",
    "Appliance": "Lightbulb ",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 11,
    "Amps": 0.09166666666666666,
    "Volts": 120,
    "Hours": 0,
    "Percent Of Day": 0,
    "Days Per Week": 1,
    "Mins/Week": 120,
    "Days Per Weekend": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 2,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.011,
    "kWh Per Week": 0.007333333333333333,
    "kWh Per Day": 0.0010476190476190477,
    "kWh Per Hour": 0.000043650793650793655,
    "Dollars Per Day": 0.00009428571428571429
  },
  {
    "Room": "Sam Office",
    "Appliance": "Computer",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 430,
    "Amps": 3.5833333333333335,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.43,
    "kWh Per Week": 24.08,
    "kWh Per Day": 3.44,
    "kWh Per Hour": 0.14333333333333334,
    "Dollars Per Day": 0.3096
  },
  {
    "Room": "Sam Office",
    "Appliance": "Vizio E320VL TV",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 180,
    "Amps": 1.5,
    "Volts": 120,
    "Hours": 9,
    "Percent Of Day": 0.375,
    "Days Per Week": 5,
    "Mins/Week": 1800,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1080,
    "Total Hours/Week+Weekend": 48,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.18,
    "kWh Per Week": 2.8800000000000003,
    "kWh Per Day": 0.4114285714285715,
    "kWh Per Hour": 0.017142857142857144,
    "Dollars Per Day": 0.03702857142857143
  },
  {
    "Room": "Sam Office",
    "Appliance": "Dell E2210H",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 180,
    "Amps": 1.5,
    "Volts": 120,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.18,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Sam Office",
    "Appliance": "Acer A221HQV",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 180,
    "Amps": 1.5,
    "Volts": 120,
    "Percent Of Day": 0,
    "Mins/Week": 0,
    "Mins/Weekend": 0,
    "Total Hours/Week+Weekend": 0,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.18,
    "kWh Per Week": 0,
    "kWh Per Day": 0,
    "kWh Per Hour": 0,
    "Dollars Per Day": 0
  },
  {
    "Room": "Sam Office",
    "Appliance": "Echo Dot",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 9,
    "Amps": 1.8,
    "Volts": 5,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.009,
    "kWh Per Week": 0.5039999999999999,
    "kWh Per Day": 0.07199999999999998,
    "kWh Per Hour": 0.002999999999999999,
    "Dollars Per Day": 0.006479999999999998
  },
  {
    "Room": "Sam Office",
    "Appliance": "Hue Light Bridge",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 5,
    "Amps": 1,
    "Volts": 5,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.005,
    "kWh Per Week": 0.27999999999999997,
    "kWh Per Day": 0.039999999999999994,
    "kWh Per Hour": 0.0016666666666666663,
    "Dollars Per Day": 0.0035999999999999995
  },
  {
    "Room": "Sam Office",
    "Appliance": "TPCast Router",
    "Category": "Computer",
    "Number Of": 1,
    "Watts": 18,
    "Amps": 1.5,
    "Volts": 12,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.018,
    "kWh Per Week": 1.0079999999999998,
    "kWh Per Day": 0.14399999999999996,
    "kWh Per Hour": 0.005999999999999998,
    "Dollars Per Day": 0.012959999999999996
  },
  {
    "Room": "Sam Office",
    "Appliance": "Fan",
    "Category": "AC/Fans",
    "Number Of": 1,
    "Watts": 240,
    "Amps": 2,
    "Volts": 120,
    "Hours": 14,
    "Percent Of Day": 0.5833333333333334,
    "Days Per Week": 5,
    "Mins/Week": 3600,
    "Days Per Weekend": 2,
    "Mins/Weekend": 1680,
    "Total Hours/Week+Weekend": 88,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.24,
    "kWh Per Week": 7.039999999999999,
    "kWh Per Day": 1.0057142857142856,
    "kWh Per Hour": 0.041904761904761896,
    "Dollars Per Day": 0.0905142857142857
  },
  {
    "Room": "Sam Room",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 2,
    "Watts": 120,
    "Amps": 1,
    "Volts": 240,
    "Hours": 7,
    "Percent Of Day": 0.2916666666666667,
    "Days Per Week": 5,
    "Mins/Week": 1500,
    "Days Per Weekend": 2,
    "Mins/Weekend": 840,
    "Total Hours/Week+Weekend": 39,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.12,
    "kWh Per Week": 1.5599999999999998,
    "kWh Per Day": 0.22285714285714284,
    "kWh Per Hour": 0.009285714285714284,
    "Dollars Per Day": 0.020057142857142853
  },
  {
    "Room": "Sam Room",
    "Appliance": "Snoopy Lamp",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 8,
    "Amps": 0.06666666666666667,
    "Volts": 120,
    "Hours": 3,
    "Percent Of Day": 0.125,
    "Days Per Week": 5,
    "Mins/Week": 600,
    "Days Per Weekend": 2,
    "Mins/Weekend": 360,
    "Total Hours/Week+Weekend": 16,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.008,
    "kWh Per Week": 0.042666666666666665,
    "kWh Per Day": 0.006095238095238095,
    "kWh Per Hour": 0.00025396825396825396,
    "Dollars Per Day": 0.0005485714285714285
  },
  {
    "Room": "Sam Room",
    "Appliance": "Phone Charger",
    "Category": "Devices",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 24,
    "Percent Of Day": 1,
    "Days Per Week": 5,
    "Mins/Week": 7200,
    "Days Per Weekend": 2,
    "Mins/Weekend": 2880,
    "Total Hours/Week+Weekend": 168,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 3.36,
    "kWh Per Day": 0.48,
    "kWh Per Hour": 0.02,
    "Dollars Per Day": 0.043199999999999995
  },
  {
    "Room": "Sunporch",
    "Appliance": "Lightbulb",
    "Category": "Lighting",
    "Number Of": 1,
    "Watts": 60,
    "Amps": 0.5,
    "Volts": 120,
    "Hours": 3,
    "Percent Of Day": 0.125,
    "Days Per Week": 5,
    "Mins/Week": 900,
    "Days Per Weekend": 2,
    "Mins/Weekend": 360,
    "Total Hours/Week+Weekend": 21,
    "Total Mins/Week+Weekend": 0,
    "kW": 0.06,
    "kWh Per Week": 0.42,
    "kWh Per Day": 0.06,
    "kWh Per Hour": 0.0025,
    "Dollars Per Day": 0.005399999999999999
  }
];
var originalWaterAuditData = [
    {
      "source": "Front Bathroom Sink",
      "minutes or loads": "minutes",
      "gallons per": 1.5,
      "cold units per day": 13,
      "hot units per day": 5,
      "total units per day": 18,
      "gallons per day": 27,
      "room": "Front Bathroom",
      "type": "sink",
      "dollars per day": 0.1678475935828877
    },
    {
      "source": "Kitchen Refrigerator",
      "minutes or loads": "minutes",
      "gallons per": 1,
      "cold units per day": 2,
      "hot units per day": "",
      "total units per day": 2,
      "gallons per day": 2,
      "room": "Kitchen",
      "type": "refrigerator",
      "dollars per day": 0.012433155080213905
    },
    {
      "source": "Kitchen Sink",
      "minutes or loads": "minutes",
      "gallons per": 2.5,
      "cold units per day": 20,
      "hot units per day": 15,
      "total units per day": 35,
      "gallons per day": 87.5,
      "room": "Kitchen",
      "type": "sink",
      "dollars per day": 0.5439505347593583
    },
    {
      "source": "Outdoor Kitchen Sink",
      "minutes or loads": "minutes",
      "gallons per": 2.5,
      "cold units per day": 6,
      "hot units per day": 4,
      "total units per day": 10,
      "gallons per day": 25,
      "room": "Kitchen",
      "type": "sink",
      "dollars per day": 0.1554144385026738
    },
    {
      "source": "Shower",
      "minutes or loads": "minutes",
      "gallons per": 1.6,
      "cold units per day": 30,
      "hot units per day": 30,
      "total units per day": 60,
      "gallons per day": 96,
      "room": "Back Bathroom",
      "type": "shower",
      "dollars per day": 0.5967914438502674
    },
    {
      "source": "Bathrrom Sink 1",
      "minutes or loads": "minutes",
      "gallons per": 1.5,
      "cold units per day": 6,
      "hot units per day": 4,
      "total units per day": 10,
      "gallons per day": 15,
      "room": "Back Bathroom",
      "type": "sink",
      "dollars per day": 0.09324866310160429
    },
    {
      "source": "Bathroom Sink 2",
      "minutes or loads": "minutes",
      "gallons per": 1.5,
      "cold units per day": 6,
      "hot units per day": 4,
      "total units per day": 10,
      "gallons per day": 15,
      "room": "Back Bathroom",
      "type": "sink",
      "dollars per day": 0.09324866310160429
    },
    {
      "source": "Front Bathroom Toilet",
      "minutes or loads": "loads",
      "gallons per": 1.6,
      "cold units per day": 10,
      "hot units per day": 0,
      "total units per day": 10,
      "gallons per day": 16,
      "room": "Front Bathroom",
      "type": "toilet",
      "dollars per day": 0.09946524064171124
    },
    {
      "source": "Dishwasher",
      "minutes or loads": "loads",
      "gallons per": 12,
      "cold units per day": 0,
      "hot units per day": 1,
      "total units per day": 1,
      "gallons per day": 12,
      "room": "Kitchen",
      "type": "dishwasher",
      "dollars per day": 0.07459893048128342
    },
    {
      "source": "Washing Machine",
      "minutes or loads": "loads",
      "gallons per": 11.9,
      "cold units per day": 1.5,
      "hot units per day": 1.5,
      "total units per day": 3,
      "gallons per day": 35.7,
      "room": "Laundry Room",
      "type": "washing machine",
      "dollars per day": 0.2219318181818182
    },
    {
      "source": "Toilet",
      "minutes or loads": "loads",
      "gallons per": 1.6,
      "cold units per day": 7,
      "hot units per day": 0,
      "total units per day": 7,
      "gallons per day": 11.200000000000001,
      "room": "Back Bathroom",
      "type": "toilet",
      "dollars per day": 0.06962566844919788
    }
  ];
var originalTransportationAuditData = [
    {
        "vehicle type": "car",
        "vehicle": "Chevy Silverado 2006",
        "miles48hours": 93,
        "MPG": 15,
        "Gas48hours": 6.2,
        "GasMonth": 93,
        "GasYear": 1116,
        "DollarPerGallon": 2.89
    },
    {
        "vehicle type": "car",
        "vehicle": "Chevy Express 3500 2006",
        "miles48hours": 75,
        "MPG": 12,
        "Gas48hours": 6.25,
        "GasMonth": 93.75,
        "GasYear": 1125,
        "DollarPerGallon": 3.02
    },
    {
        "vehicle type": "plane",
        "vehicle": "Airplane",
        "MPG": .2,
        "miles48hours": 15,
        "GasYear": 54.42,
        "DollarPerGallon": 2.19
        
    }
];
var originalWasteAuditData = [
    {
        "type": "garbage",
        "paper": 6.01,
        "plastic": 3.1,
        "metal": 1,
        "glass": 0,
        "other": 3.12,
        "compostable": 0,
        "total": 13.23
    },
    {
        "type": "recycle",
        "paper": 25.5,
        "plastic": 19.875,
        "metal": 2,
        "glass": 43.5,
        "other": 0,
        "compostable": 3.3,
        "total": 94.175
    }
    ];
    
var editedElectricityAuditData = originalElectricityAuditData;
var editedWaterAuditData = originalWaterAuditData;
var editedTransportationAuditData = originalTransportationAuditData;
var editedWasteAuditData = originalWasteAuditData;

var resetEditedAudits = function() {
  editedElectricityAuditData = originalElectricityAuditData;
  editedWaterAuditData = originalWaterAuditData;
  editedTransportationAuditData = originalTransportationAuditData;
  editedWasteAuditData = originalWasteAuditData;
};

var getWaterCostPerDay = function(index) {
    return editedWaterAuditData[index]["gallons per day"]*(4.65*(1/748));
}
var getElectricityCostPerDay = function(index) {
    return editedElectricityAuditData[index]["Dollars Per Day"];
}
var getTransportationCostPerDay = function(index) {
    return (editedTransportationAuditData[index]["DollarPerGallon"] * editedTransportationAuditData[index]["Gas48hours"] * .5);
}
var getTotalCostPerYear = function(audit) {
    if (audit == "waste") {
        return 0;
    } else {
        var total = 0;
        if (audit == "transportation") {
            for (var i = 0; i < 2; i++){
                total += getTransportationCostPerDay(i);
            }
            
        } else {
            audit = audit.capitalize();
            for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
                var getTotalFunc = window[`get${audit}CostPerDay`];
                total += getTotalFunc(i);
            }
        }
        total = total*365;
        total = Math.round(total, 2);
        return total;
    }
};
var changeCurrentTitle = function(title) {
    document.querySelector("#current").innerHTML = currentAudit;
};
var getNextAudit = function (current) {
    if (current === 'transportation') {
        return 'electricity';
    } else {
    return audits[(1 + audits.indexOf(current))];
    }
};
var getPreviousAudit = function (current) {
    if (current === 'electricity') {
        return 'transportation';
    } else {
    return audits[(-1 + audits.indexOf(current))];
    }
};
var getMainColorAudit = function(audit) {
    return getCSSVar(`--${audit}-main`);
};
var getBackgroundColorAudit = function(audit) {
    return getCSSVar(`--${audit}-background`);
};
var getBackgroundGradientAudit = function(audit) {
  return getCSSVar(`--${audit}-background-gradient`);
};
var changeColorButtons = function(){
    var NBTNID = Snap("#nextButton");
    var PBTNID = Snap("#previousButton");
    var PPolys = PBTNID.select("polygon");
    var NPolys = NBTNID.select("polygon");
    PPolys.animate({fill: getBackgroundColorAudit(getPreviousAudit(currentAudit)), stroke: getBackgroundColorAudit(getPreviousAudit(currentAudit)), strokeOpacity: .5}, 500, mina.easein);
    NPolys.animate({fill: getBackgroundColorAudit(getNextAudit(currentAudit)), stroke: getBackgroundColorAudit(getNextAudit(currentAudit)), strokeOpacity: .5}, 500, mina.easein);
    
};
var getTotalMainUnitPerYear = function() {
  var audit = currentAudit.capitalize();
  switch(audit){
    case "Electricity":
      return `${Math.round(totalForThing(audit, 0, 0, "kWh Per Day")*365, 4)} kWh Per Year`;
      break;
    case "Water":
      return `${Math.round(totalForThing(audit, 0, 0, "gallons per day")*365, 4)} Gallons of Water per Year`;
      break;
    case "Transportation":
      return `${totalForThing(audit, 0, 0, "GasYear")} Gallons of Gas per Year`;
      break;
    case "Waste":
      return `${Math.floor(totalForThing(audit, 0, 0, "total")/16)}lbs of Waste per Year`;
      break;
    default:
  }
}
var updateMoney = function(newMoney) {
    document.getElementById("moneyTotal").innerHTML = `$${newMoney} per year`;
};
var updateTotal =function(newTotal) {
    document.getElementById("totalChart").innerHTML = newTotal;
};

var editData = function (audit, index, column, newValue) {
  audit = audit.capitalize();
  window[`edited${audit}AuditData`][index][column] = newValue;
};

var solutionsToHTML = function() {
  var solutionsElementData ="";
  var audit = currentAudit.capitalize();
  for (var i = 0; i < solutions[audit].length; i++) {
    var thisSolution = solutions[audit][i];
    if (thisSolution["implemented"] === true) {
      var solutionElementData = `
      <div data-solution-id="${thisSolution["id"]}" id="solution${audit}${thisSolution["id"]}"onclick="makeChangeToData(this)" class="implemented">
        <span class="solutionDescription">${thisSolution["title"]}</span><br />
        <span class="impactHeader">Economic Impact:</span><br />
        <span class="impacts">${thisSolution["economicImpact"]}</span><br />
        <span class="impactHeader">Social Impact:</span><br />
        <span class="impacts">${thisSolution["socialImpact"]}</span><br />
        <span class="impactHeader">Environmental Impact:</span><br />
        <span class="impacts">${thisSolution["environmentalImpact"]}</span>
      </div>
      `;
    } else {
    var solutionElementData = `
      <div data-solution-id="${thisSolution["id"]}" id="solution${audit}${thisSolution["id"]}"onclick="makeChangeToData(this)">
        <span class="solutionDescription">${thisSolution["title"]}</span><br />
        <span class="impactHeader">Economic Impact:</span><br />
        <span class="impacts">${thisSolution["economicImpact"]}</span><br />
        <span class="impactHeader">Social Impact:</span><br />
        <span class="impacts">${thisSolution["socialImpact"]}</span><br />
        <span class="impactHeader">Environmental Impact:</span><br />
        <span class="impacts">${thisSolution["environmentalImpact"]}</span>
      </div>
      `;
      
    }
    
    solutionsElementData += solutionElementData;
    
  }
  document.getElementById("solutions").innerHTML = solutionsElementData;
};

var whereObjectOrWhat = function(thing) {
  if (thing.isArray){
    return "array"
  } else {
  return typeof thing;}
}

var whereCheck = function(warray, dindex) {
  for (var i = 0; i < warray.length; i++) {
    switch (warray["compare"]) {
      case "==": 
        if (!(dindex[warray["column"]] == warray["value"])) {
          return false;
        }  
      case "<=":
        if (!(dindex[warray["column"]] <= warray["value"])) {
          return false;
        }  
      case ">=":
        if (!(dindex[warray["column"]] >= warray["value"])) {
          return false;
        }  
      case "!=":
        if (!(dindex[warray["column"]] != warray["value"])) {
          return false;
        }  
      default:
        return false;
    }
  }
}

var changeData = function(audit, toChange, changeBy, where) {
  audit = audit.capitalize();
  for (var i=0; i < window[`edited${audit}AuditData`].length; i++) {
    var Dindex = window[`edited${audit}AuditData`][i];
    if (whereCheck(where, Dindex)){
      var newVal = Dindex[toChange] + changeBy;
      Dindex[toChange] = newVal;
    }
  }
};

var editDependentData = function(changedAudit) {
  changedAudit = changedAudit.capitalize();
  switch (changedAudit) {
    case "Electricity": 
      for (var i = 0; i < editedElectricityAuditData.length; i++) {
        var Aindex = editedElectricityAuditData[i];
        var totalMins = (Aindex["Total Hours/Week+Weekend"] * 60) + Aindex["Total Mins/Week+Weekend"];
        var kW = Aindex["kW"];
        var kWhWeek = (kW * (totalMins/60))/3;
        var kWhDay = kWhWeek/7;
        var dollarDay = kWhDay * .09;
        Aindex["Dollars Per Day"] = dollarDay;
        Aindex["kWh Per Day"] = kWhDay;
        Aindex["kWh Per Week"] = kWhWeek;
      }
      break;
    case "Water":
      for (var i = 0; i < editedWasteAuditData.length; i++) {
        var Aindex = editedWaterAuditData[i];
        var totalUnits = Aindex["total units per day"];
        var gallonsPerDay = Aindex["gallons per"] * totalUnits;
        var dollarDay = gallonsPerDay * (4.65/748);
        Aindex["gallons per day"] = gallonsPerDay;
        Aindex["dollars per day"] = dollarDay;
      }
      break;
    case "Transportation":
      for (var i = 0; i < 3; i++) {
        var Aindex = editedTransportationAuditData[i];
        var miles48 = Aindex["miles48hours"];
        var MPG = Aindex["MPG"];
        var gasYear = (miles48 * (365/2))/MPG;
        if (Aindex["vehicle type"] == "car") {
          var gas48 = miles48/MPG;
          var gasMonth = gas48 * (30/2);
          Aindex["Gas48hours"] = gas48;
          Aindex["GasMonth"] = gasMonth;
        }
        Aindex["GasYear"] = gasYear;
      }
      break;
    case "Waste":
      for (var i=0; i < 2; i++) {
        var Aindex = editedWasteAuditData[i];
        Aindex["total"] = Aindex["paper"] + Aindex["plastic"] + Aindex["metal"] + Aindex["glass"] + Aindex["other"] + Aindex["compostable"];
      }
      break;
    default:
    
  }
};

var makeSVG = function () {
    changeCurrentTitle();
    var Wwidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    var Wheight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    
    var bWidth= Wwidth * .1;
    var rootFontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
    rootFontSize = rootFontSize.replace("px", "");
    var bHeight =  rootFontSize* 5;
    
    var previousButtonSnap = Snap("#previousButton");
    var nextButtonSnap = Snap("#nextButton");
    /*previousButtonSnap.attr({viewbox: "0,0,200,100", preserveAspectRatio:"none"});
    nextButtonSnap.attr({viewbox: "0,0,200,100", preserveAspectRatio:"none"});
    var Pbutton = previousButtonSnap.polygon(0, 50, 50, 0, 200, 0, 200, 100, 50, 100);
    var Nbutton = nextButtonSnap.polygon(200, 50, 150, 0, 0, 0, 0, 100, 150, 100);*/
    previousButtonSnap.attr({viewbox: `0,0,${bWidth},${bHeight}`, preserveAspectRatio:"none"});
    nextButtonSnap.attr({viewbox: `0,0,${bWidth},${bHeight}`, preserveAspectRatio:"none"});
    var Pbutton = previousButtonSnap.polygon(0, bHeight * .5, bWidth * .25, 0, bWidth, 0, bWidth, bHeight, bWidth * .25, bHeight);
    var Nbutton = nextButtonSnap.polygon(bWidth, bHeight * .5, bWidth * .75, 0, 0, 0, 0, bHeight, bWidth * .75, bHeight);
    Pbutton.attr("id", "Pbutton");
    Nbutton.attr("id", "Nbutton");
    changeColorButtons();
    Pbutton.hover(
        function() {
            Pbutton.animate({points: `0, ${bHeight * .5}, ${bWidth * .5}, 0, ${bWidth}, 0, ${bWidth}, ${bHeight}, ${bWidth * .5}, ${bHeight}`}, 500, mina.elastic);
        },
        function() {
            Pbutton.animate({points: `0, ${bHeight * .5}, ${bWidth * .25}, 0, ${bWidth}, 0, ${bWidth}, ${bHeight}, ${bWidth * .25}, ${bHeight}`}, 500, mina.bounce);
        }
    );
    Nbutton.hover(
        function() {
            Nbutton.animate({points: `${bWidth}, ${bHeight * .5}, ${bWidth * .5}, 0, 0, 0, 0, ${bHeight}, ${bWidth * .5}, ${bHeight}`}, 500, mina.elastic);
        },
        function() {
            Nbutton.animate({points: `${bWidth}, ${bHeight * .5}, ${bWidth * .75}, 0, 0, 0, 0, ${bHeight}, ${bWidth * .75}, ${bHeight}`}, 500, mina.bounce);
        }
    );
};

var redrawSVG = function() {
  changeCurrentTitle();
    var Wwidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    
    var Wheight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    
    var bWidth= Wwidth * .1;
    var rootFontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
    rootFontSize = rootFontSize.replace("px", "");
    var bHeight =  rootFontSize* 5;
    
    var previousButtonSnap = Snap("#previousButton");
    var nextButtonSnap = Snap("#nextButton");
    previousButtonSnap.attr({viewbox: `0,0,${bWidth},${bHeight}`, preserveAspectRatio:"none"});
    nextButtonSnap.attr({viewbox: `0,0,${bWidth},${bHeight}`, preserveAspectRatio:"none"});
    changeColorButtons();
    var Pbutton = previousButtonSnap.children()[0];
    var Nbutton = nextButtonSnap.children()[0].node;
    alert(`${Pbutton}`)
    Pbutton.attr("points" ,`0, ${bHeight * .5}, ${bWidth * .25}, 0, ${bWidth}, 0, ${bWidth}, ${bHeight}, ${bWidth * .25}, ${bHeight}`)
    Nbutton.attr("points", `${bWidth}, ${bHeight * .5}, ${bWidth * .75}, 0, 0, 0, 0, ${bHeight}, ${bWidth * .75}, ${bHeight}`)
    Pbutton.hover(
        function() {
            Pbutton.animate({points: `0, ${bHeight * .5}, ${bWidth * .5}, 0, ${bWidth}, 0, ${bWidth}, ${bHeight}, ${bWidth * .5}, ${bHeight}`}, 500, mina.elastic);
        },
        function() {
            Pbutton.animate({points: `0, ${bHeight * .5}, ${bWidth * .25}, 0, ${bWidth}, 0, ${bWidth}, ${bHeight}, ${bWidth * .25}, ${bHeight}`}, 500, mina.bounce);
        }
    );
    Nbutton.hover(
        function() {
            Nbutton.animate({points: `${bWidth}, ${bHeight * .5}, ${bWidth * .5}, 0, 0, 0, 0, ${bHeight}, ${bWidth * .5}, ${bHeight}`}, 500, mina.elastic);
        },
        function() {
            Nbutton.animate({points: `${bWidth}, ${bHeight * .5}, ${bWidth * .75}, 0, 0, 0, 0, ${bHeight}, ${bWidth * .75}, ${bHeight}`}, 500, mina.bounce);
        }
    );
}

var makeChangeToData =function(solutionElement) {
  solutionElement.classList.toggle("implemented");
  var audit = currentAudit.capitalize();
  var id = solutionElement.getAttribute("data-solution-id");
  if (solutionElement["implemented"] === true) {
    solutionElement["implemented"] = false;
  } else {
    solutionElement["implemented"] = true;
  }
  var solutionObject = solutions[audit][id];
  changeData(audit, solutionObject["toChange"], solutionObject["changeBy"], solutionObject["where"]);
  editDependentData(currentAudit);
  updatePageOnChange();
}

var totalForThing = function(audit, search, searchCategory, totalCategory) {
    audit = audit.capitalize();
    var total = 0;
    for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
      if(searchCategory == 0) {
        total += window[`edited${audit}AuditData`][i][totalCategory];
      } else {
        if (window[`edited${audit}AuditData`][i][searchCategory] == search) {
            total += window[`edited${audit}AuditData`][i][totalCategory];
        }
      }
    }
    if (total === 0) {
      total = 1
    };
    return total;
};

var drawChart = function(audit, what, type, where) {
    audit = audit.capitalize();
    //alert(`${audit} ${what} ${type} ${where}`);
    var data = new google.visualization.DataTable();
    switch(audit) {
        case "Electricity":
            
            switch (type) {
                case "Room":
                    data.addColumn('string', 'appliance');
                    data.addColumn('number', what);
                    for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
                        if (window[`edited${audit}AuditData`][i]['Room'] == where) {
                            data.addRows([[window[`edited${audit}AuditData`][i]["Appliance"], window[`edited${audit}AuditData`][i][what]]]);
                        }
                    }
                    var options = {
                        'title': `${what} per appliance in room ${where}`
                    };
                break;
                case "Category":
                    data.addColumn('string', 'appliance');
                    data.addColumn('number', what);
                    for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
                        if (window[`edited${audit}AuditData`][i]['Category'] == where) {
                            data.addRows([[window[`edited${audit}AuditData`][i]["Appliance"], window[`edited${audit}AuditData`][i][what]]]);
                        }
                    }
                    var options = {
                        'title': `${what} per appliance in category ${where}`
                    };
                break;
                case "all": 
                    data.addColumn('string', where);
                    data.addColumn('number', what);
                    var uniqueThings = window[`edited${audit}AuditData`].uniqueInCategory(where);
                    for (var i = 0; i < uniqueThings.length; i++) {
                        
                        data.addRows([[uniqueThings[i], totalForThing(audit, uniqueThings[i], where, what)]]);
                    }
                    var options = {
                        'title': `${what} per ${where}`
                    };
                break;
                default: 
                
            }
            break;
        case "Water":
            switch (type) {
                case "room":
                    data.addColumn('string', 'source');
                    data.addColumn('number', what);
                    for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
                        if (window[`edited${audit}AuditData`][i]['room'] == where) {
                            data.addRows([[window[`edited${audit}AuditData`][i]["source"], window[`edited${audit}AuditData`][i][what]]]);
                        }
                    }
                    var options = {
                        'title': `${what} per source in room ${where}`
                    };
                break;
                case "type":
                    data.addColumn('string', 'source');
                    data.addColumn('number', what);
                    for (var i = 0; i < window[`edited${audit}AuditData`].length; i++) {
                        if (window[`edited${audit}AuditData`][i]['type'] == where) {
                            data.addRows([[window[`edited${audit}AuditData`][i]["source"], window[`edited${audit}AuditData`][i][what]]]);
                        }
                    }
                    var options = {
                        'title': `${what} per source in type ${where}`
                    };
                break;
                case "all": 
                    data.addColumn('string', where);
                    data.addColumn('number', what);
                    var uniqueThings = window[`edited${audit}AuditData`].uniqueInCategory(where);
                    for (var i = 0; i < uniqueThings.length; i++) {
                        
                        data.addRows([[uniqueThings[i], totalForThing("Water", uniqueThings[i], where, what)]]);
                        
                    }
                    var options = {
                        'title': `${what} per ${where}`
                    };
                break;
                default: 
                
            }
            break;
        case "Transportation":
            switch(type) {
                case "gallons gas per year":
                    data.addColumn('string', 'vehicle');
                    data.addColumn('number', type);
                    for (var i=0; i < editedTransportationAuditData.length; i++) {
                        data.addRows([[editedTransportationAuditData[i]['vehicle'], editedTransportationAuditData[i]["GasYear"]]]);
                    }
                    var options = {
                        'title': `${type} per vehicle`
                    };
                break;
                case "cost per year":
                    data.addColumn('string', 'vehicle');
                    data.addColumn('number', type);
                    for (var i=0; i < editedTransportationAuditData.length; i++) {
                        data.addRows([[editedTransportationAuditData[i]['vehicle'], editedTransportationAuditData[i]["GasYear"]*editedTransportationAuditData[i]["DollarPerGallon"]]]);
                    }
                    var options = {
                        'title': `${type} per vehicle`
                    };
                break;
                case "miles per year":
                    data.addColumn('string', 'vehicle');
                    data.addColumn('number', type);
                    for (var i=0; i < editedTransportationAuditData.length; i++) {
                        data.addRows([[editedTransportationAuditData[i]['vehicle'], (editedTransportationAuditData[i]["miles48hours"]/2*365)]]);
                    }
                    var options = {
                        'title': `${type} per vehicle`
                    };
                break;
                case "all":
                    data.addColumn('string', 'vehicle');
                    data.addColumn('number', "gallons gas per year");
                    data.addColumn('number', "cost per year");
                    data.addColumn('number', "miles per year");
                    for (var i=0; i < editedTransportationAuditData.length; i++) {
                        data.addRows([[editedTransportationAuditData[i]['vehicle'], 
                                        editedTransportationAuditData[i]["GasYear"], 
                                        editedTransportationAuditData[i]["GasYear"]*editedTransportationAuditData[i]["DollarPerGallon"],
                                        (editedTransportationAuditData[i]["miles48hours"]/2*365)
                        ]]);
                    }
                    var options = {
                        'title': `gallons of gas, cost, and miles per year per vehicle`
                    };
                break;
                default:    
            }
        case "Waste":  
            switch (type) {
              case "category":
                data.addColumn('string', 'ending location');
                data.addColumn('number', 'oz of');
                data.addRows([
                  [
                    'recycle',
                    editedWasteAuditData[1][where]
                  ],
                  [
                    'garbage',
                    editedWasteAuditData[0][where]
                  ]
                ]);
              var options = {
                'title': `how much ${where} is recycled and garbaged`
              };
              break;
              case "recycle":
                data.addColumn('string', 'category');
                data.addColumn('number', 'oz of');
                var recycled=editedWasteAuditData[1]
                data.addRows([
                  ['paper', recycled['paper']],
                  ['plastic', recycled['plastic']],
                  ['metal', recycled['metal']],
                  ['glass', recycled['glass']],
                  ['other', recycled['other']],
                  ['compostable', recycled['compostable']]
                  ]);
                  var options = {
                'title': `what amount of each category was recycled`
              };
              break;
              case "garbage":
                data.addColumn('string', 'category');
                data.addColumn('number', 'oz of');
                var garbaged=editedWasteAuditData[0];
                data.addRows([
                  ['paper', garbaged['paper']],
                  ['plastic', garbaged['plastic']],
                  ['metal', garbaged['metal']],
                  ['glass', garbaged['glass']],
                  ['other', garbaged['other']],
                  ['compostable', garbaged['compostable']]
                  ]);
                var options = {
                'title': `what amount of each category was garbaged`
              };
              break;
            }
        break;  
    }
    if (audit == 'Transportation' && type == "all"){
      var chart = new google.visualization.BarChart(document.getElementById('graph'));
    } else {
      var chart = new google.visualization.PieChart(document.getElementById('graph'));
    }
    chart.draw(data, options);
};

var reDrawChart = function() {
  var audit = currentAudit.capitalize();
  var what = document.getElementById("whatSel").value;
  var type = document.getElementById("typeSel").value;
  var where = document.getElementById("whereSel").value;
  drawChart(audit, what, type, where);
};

var selectorsArray = [
  {
    "audit": "Electricity",
    //rooms, categories, or all
    "text": "in",
    "types": [
      {
        //where is list of options
        "type": "Room",
        "text": "",
        "wheres": [           
          "Bathroom",
          "Dining Room",
          "Guest Room",
          "Hallway",
          "Kitchen",
          "Laundry",
          "Living Room",
          "Mom Studio",
          "Outside",
          "Pantry",
          "Parents Bathroom",
          "Parents Bedroom",
          "Parents Office",
          "Sam Office",
          "Sam Room",
          "Sunporch"
        ]
      },
      {
        "type": "Category",
        "text": "",
        "wheres": [
          "AC/Fans",
          "Lighting",
          "Fire",
          "Kitchen Appliances",
          "Appliances",
          "Computer",
          "Art",
          "Devices",
          "Vacuum"
        ]
      },
      {
        "type": "all",
        "text": "by",
        "wheres": [
          "Appliance",
          "Room",
          "Category"
        ]
      }
    ],
    //dollars per day or kWh per day.
    "whats": [
      "kWh Per Day",
      "Dollars Per Day"
    ]
    
  },
  {
    "audit": "Water",
    "text": "in",
    "types": [
      {
        "type": "room",
        "text": "",
        "wheres": [
          "Front Bathroom",
          "Kitchen",
          "Back Bathroom",
          "Laundry Room"
        ]
      },
      {
        "type": "type",
        "text": "",
        "wheres": [
          "sink", 
          "refrigerator",
          "shower",
          "toilet",
          "dishwasher",
          "washing machine"
        ]
      },
      {
        "type": "all",
        "text": "by",
        "wheres": [
          "room",
          "type",
          "source"
        ]
      }
    ],
    "whats": [
      "gallons per day",
      "dollars per day"
    ]
  },
  {
    "audit": "Transportation",
    "text": "look at",
    "types": [
      {
        "type": "gallons gas per year",
        "wheres": [
          "N/A"
        ]
      },
      {
        "type": "cost per year",
        "wheres": [
          "N/A"
        ]
      },
      {
        "type": "miles per year",
        "wheres": [
          "N/A"
        ]
      },
      {
        "type": "all",
        "wheres": [
          "N/A"
        ]
      }
      
    ],
    "whats": [
      "N/A"
    ]
  },
  {
    "audit": "Waste",
    "types": [
      {
        "type": "category",
        "wheres": [
          "paper",
          "plastic",
          "metal",
          "glass",
          "other",
          "compostable",
          "total"
        ]
      },
      {
        "type": "recycle",
        "wheres": [
          "N/A"
        ]
      },
      {
        "type": "garbage",
        "wheres": [
          "N/A"
        ]
      }
    ],
    "whats": [
      "N/A"
    ]
  }
];

var updatePageOnChange = function () {
  reDrawChart();
  updateMoney(getTotalCostPerYear(currentAudit));
  updateTotal(getTotalMainUnitPerYear());
};

var resized = function() {
  alert('resizing');
  //makeSVG();
  //changeColorButtons();
  //reDrawChart();
};


var arrayToDatalist = function(array) {
  if (!Array.isArray(array) || !array.length) {
    return;
  } else {
    var DatalistToReturn = "";
    //DatalistToReturn += `<option value="${element}">`;
    for (var i = 0; i < array.length; i++) {
      DatalistToReturn += `<option value="${array[i]}">${array[i].capitalize()}</option>`;
    }
    return DatalistToReturn;
  }
};

//for when type changes
var updateWhereSelectorsDatalist = function() {
  var indexAudit = 0;
  var datalistArray = "";
  var datalist = "";
  var type = document.getElementById("typeSel");
  /*if ((currentAudit == "Waste" && (type.value == "recycle" || type.value == "garbage"))||(currentAudit == "Transportation")) {
    document.getElementById("whereSel").style.visibility = "hidden";
    document.getElementById("where-text").style.visibility = "hidden";
    //document.getElementById("whereSel").value = "";*/
  //} else {
    //document.getElementById("whereSel").style.visibility = "visibile";
    //document.getElementById("where-text").style.visibility = "visibile";
    for (var i = 0; i < 4; i++) {
      if (selectorsArray[i]["audit"] == currentAudit.capitalize()) {
        indexAudit = i;
      }
    }
    for (var i = 0; i < selectorsArray[indexAudit]["types"].length; i++) {
      
      if (selectorsArray[indexAudit]["types"][i]["type"] == type.value) {
        datalistArray = selectorsArray[indexAudit]["types"][i]["wheres"];
        
        //document.getElementById("where-text").innerHTML = selectorsArray[indexAudit]["types"][i]["text"];
      }
    }
    datalist = arrayToDatalist(datalistArray);
    document.getElementById("whereSel").innerHTML = datalist;
    
  //}
};


var defaultSelectors = function() {
  var what = document.getElementById("whatSel");
  var type = document.getElementById("typeSel");
  var typeText = document.getElementById("type-text");
  var where = document.getElementById("whereSel");
  var whereText = document.getElementById("where-text");
  var indexAudit = 0;
  for (var i = 0; i < 4; i++) {
    if (selectorsArray[i].audit == currentAudit.capitalize()) {
      indexAudit = i;
    }
  }
  /*if (currentAudit.capitalize() == "Waste" || currentAudit.capitalize() == "Transportation") {
    what.style.visibility = "hidden";
    //what.value = "";
    //where.value = "";
  } else {
    what.style.visibility = "visible";
    /*what.value = "";
    type.value = "";
    where.value = "";*/
    
    document.getElementById("whatSel").innerHTML = arrayToDatalist(selectorsArray[indexAudit]["whats"]);
    
  //}
  var typeDatalist = [];
  for (var i=0; i < selectorsArray[indexAudit]["types"].length; i++) {
    typeDatalist.push(selectorsArray[indexAudit]["types"][i]["type"]);
  }
  document.getElementById("typeSel").innerHTML = arrayToDatalist(typeDatalist);
  updateWhereSelectorsDatalist();
};

var selectorsChange = function () {
  clearTimeout();
  updateWhereSelectorsDatalist();
  setTimeout(function(){ reDrawChart(); }, 1000);
};

var whereChange = function() {
  clearTimeout();
  setTimeout(function(){ reDrawChart(); }, 1000);
}

var loadChartStuff = function() {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(reDrawChart);
};

var toNextAudit = function() {
    currentAudit = getNextAudit(currentAudit);
    changeColorButtons();
    setCSSVar('--main', getMainColorAudit(currentAudit));
    setCSSVar('--background', getBackgroundColorAudit(currentAudit));
    /*setCSSVar('--background-r', convertHex(getBackgroundColorAudit(currentAudit)).red);
    setCSSVar('--background-g', convertHex(getBackgroundColorAudit(currentAudit)).green);
    setCSSVar('--background-b', convertHex(getBackgroundColorAudit(currentAudit)).blue);
    setCSSVar('--main-r', convertHex(getMainColorAudit(currentAudit)).red);
    setCSSVar('--main-g', convertHex(getMainColorAudit(currentAudit)).green);
    setCSSVar('--main-b', convertHex(getMainColorAudit(currentAudit)).blue);*/
    changeCurrentTitle(currentAudit);
    defaultSelectors();
    updatePageOnChange();
    solutionsToHTML();
};
var toPreviousAudit = function() {
    currentAudit = getPreviousAudit(currentAudit);
    changeColorButtons();
    setCSSVar('--main', getMainColorAudit(currentAudit));
    setCSSVar('--background', getBackgroundColorAudit(currentAudit));
    /*setCSSVar('--background-r', convertHex(getBackgroundColorAudit(currentAudit)).red);
    setCSSVar('--background-g', convertHex(getBackgroundColorAudit(currentAudit)).green);
    setCSSVar('--background-b', convertHex(getBackgroundColorAudit(currentAudit)).blue);
    setCSSVar('--main-r', convertHex(getMainColorAudit(currentAudit)).red);
    setCSSVar('--main-g', convertHex(getMainColorAudit(currentAudit)).green);
    setCSSVar('--main-b', convertHex(getMainColorAudit(currentAudit)).blue);*/
    changeCurrentTitle(currentAudit);
    defaultSelectors();
    updatePageOnChange();
    solutionsToHTML();
};
/*setCSSVar('--background-r', convertHex(getBackgroundColorAudit(currentAudit)).red);
    setCSSVar('--background-g', convertHex(getBackgroundColorAudit(currentAudit)).green);
    setCSSVar('--background-b', convertHex(getBackgroundColorAudit(currentAudit)).blue);
    setCSSVar('--main-r', convertHex(getMainColorAudit(currentAudit)).red);
    setCSSVar('--main-g', convertHex(getMainColorAudit(currentAudit)).green);
    setCSSVar('--main-b', convertHex(getMainColorAudit(currentAudit)).blue);*/




var loadedStart = function() {
  makeSVG();
  loadChartStuff();
  setTimeout(function(){ solutionsToHTML(); }, 500);
  setTimeout(function(){ updatePageOnChange(); }, 500);
  defaultSelectors();
  
};
window.addEventListener("resize", function(){
  clearTimeout
  setTimeout(function(){
  location.reload();
  }, 1000);
  
});
window.addEventListener("load", loadedStart);









