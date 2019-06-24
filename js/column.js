function Column(id, name) {
    let self = this;
    this.id = id;
    this.name = name || 'No name given';

    this.element = generateTemplate('column-template', { name: this.name, id: this.id });

    this.element.querySelector('.column').addEventListener('click', function (event){
        if (event.target.classList.contains('add-card')) {
            let cardName = prompt("Enter the name of the card");
            event.preventDefault();
            
            if (cardName === null) return;

            if (!cardName) {
                cardName = 'no name';
            };

            let data = new FormData();
            let error;
            data.append('name', cardName);
            data.append('bootcamp_kanban_column_id', self.id);

            fetch(baseUrl + '/card', {
                method: 'POST',
                headers: myHeaders,
                body: data,
            })
            .then(function(resp) {
                error = !resp.ok;
                return resp.json();
            })
            .then(function(resp) {
                if (error) {
                    console.log('err', resp.message);
                    return;
                }
                let card = new Card(resp.id, cardName);
                self.addCard(card);
            });

        } else if (event.target.classList.contains('btn-delete')) {
                self.removeColumn();
            }
    })     
};

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