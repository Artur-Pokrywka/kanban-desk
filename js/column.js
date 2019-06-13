function Column(id, name) {
    let self = this;
    this.id = id;
    this.name = name || 'No name given';
    this.element = generateTemplate('column-template', { name: this.name, id: this.id });

    if (event.target.classList.contains('add-card')) {
        const cardName = prompt("Enter the name of the card");
        event.preventDefault();

        fetch(baseUrl + '/card', {
            method: 'POST',
            headers: myHeaders,
            body: data,
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function() {
            let card = new Card(resp.id, cardName);
            self.addCard(card);
        });
    }
}

Column.prototype = {
  addCard: function(card) {
    this.element.querySelector('ul').appendChild(card.element);
  },
  removeColumn: function() {
    let self = this;
    fetch(baseUrl + '/column/' + self.id, { method: 'DELETE', headers: myHeaders })
        .then(function(resp) {
        return resp.json();
        })
    .then(function(resp) {
        self.element.parentNode.removeChild(self.element);
    });
  }
};