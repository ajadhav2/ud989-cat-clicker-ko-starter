var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.observable('Infant');
	this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	this.imgAttribution = ko.observable('https://www.test.com');

	this.nickNames = ko.observableArray([
								    { name: "Mini"},
								    { name: "Rambo"},
								    { name: "Rocky"}
								]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		if(this.clickCount() >= 20){
			// console.log("Adult");
			this.level('Adult');
		}else if(this.clickCount() >= 10){
			// console.log("Teen");
			this.level('Teen');
		}
	};
}

ko.applyBindings(new ViewModel());