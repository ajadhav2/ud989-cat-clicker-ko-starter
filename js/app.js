var initialCats = [
	{
		clickCount : 0,
		name : 'Tabby',
		level : 'Infant',
		imgSrc : 'img/22252709_010df3379e_z.jpg',
		imgAttribution : 'https://www.test.com',
		nickNames : ['Mini','Rambo','Rocky']
	},
	{
		clickCount : 0,
		name : 'Mini',
		level : 'Infant',
		imgSrc : 'img/cat1.jpg',
		imgAttribution : 'https://www.test.com',
		nickNames : ['lolo',]
	},
	{
		clickCount : 0,
		name : 'Meow',
		level : 'Infant',
		imgSrc : 'img/cat2.jpg',
		imgAttribution : 'https://www.test.com',
		nickNames : ['xoxo',]
	},
	{
		clickCount : 0,
		name : 'Claws',
		level : 'Infant',
		imgSrc : 'img/cat3.jpg',
		imgAttribution : 'https://www.test.com',
		nickNames : ['toto',]
	}
]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.level = ko.observable(data.level);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	// this.nickNames = ko.observableArray([
	// 							    { name: "Mini"},
	// 							    { name: "Rambo"},
	// 							    { name: "Rocky"}
	// 							]);

	this.nickNames = ko.observableArray(data.nickNames);

	this.level = ko.computed(function() {
        var clicks = this.clickCount();
		var title;
		if(clicks < 10){
			// this.level('Adult');
			title = 'Newborn';
		}else if(clicks < 20){
			title = 'Infant';
		}else if(clicks < 30){
			title = 'Child';
		}else if(clicks < 35){
			title = 'Teen';
		}else if(clicks < 40){
			title = 'Teen';
		}else if(clicks < 50){
			title = 'Adult';
		}else{
			title = 'Ninja';
		}
		return title;
    }, this);
								    
};

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	// this.currentCat = ko.observable( new Cat() );
	// this.currentCat = ko.observable( new Cat({
	// 	clickCount : 0,
	// 	name : 'Tabby',
	// 	level : 'Infant',
	// 	imgSrc : 'img/22252709_010df3379e_z.jpg',
	// 	imgAttribution : 'https://www.test.com',
	// 	nickNames : ['Mini','Rambo','Rocky']
	// }) );

	this.currentCat = ko.observable(this.catList()[0]);


	this.incrementCounter = function() {
		// this.currentCat().clickCount(this.currentCat().clickCount() + 1); //when in viewmodel context
		// this.clickCount(this.clickCount() + 1); // When in currentcat context

		self.currentCat().clickCount(self.currentCat().clickCount() + 1); //when in currentcat context alternative
	};
};

ko.applyBindings(new ViewModel());