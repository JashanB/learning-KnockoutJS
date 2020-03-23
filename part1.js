// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  this.firstName = ko.observable("Bert");
  this.lastName = ko.observable("Bertington");
}
//binds based on firstName/lastName variables
//observables - these are properties that automatically will issue notifications whenever their value changes
// Activates knockout.js
ko.applyBindings(new AppViewModel());