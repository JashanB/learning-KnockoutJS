// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("Bert");
  this.lastName = ko.observable("Bertington");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);
}
//binds based on firstName/lastName variables
//observables - these are properties that automatically will issue notifications whenever their value changes
// Activates knockout.js
ko.applyBindings(new AppViewModel());