var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.observable('Infant');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.imgAttribution = ko.observable('https://www.test.com');

	// this.nickNames = ko.observableArray([
	// 							    { name: "Mini"},
	// 							    { name: "Rambo"},
	// 							    { name: "Rocky"}
	// 							]);

	this.nickNames = ko.observableArray(['Mini','Rambo','Rocky']);

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

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		// this.currentCat().clickCount(this.currentCat().clickCount() + 1); //when in viewmodel context
		this.clickCount(this.clickCount() + 1); // When in currentcat context
	};
};

ko.applyBindings(new ViewModel());