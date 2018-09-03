var human = {
    spicies: "human",
    sayName: function(){
        console.log(`hi there,${this.name}`);
    }
}

var musician = Object.create(human);
musician.sayInstrument = function ()
{
    console.log(`i play ${this.instrument}`)
}

var will = Object.create(musician,{
    name:{
        value:"akansha"
    },
    instrument:{
        value : "sitar"
    }
})

will.sayName();
will.sayInstrument();