AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "Spider Man",
          url: "./assets/spider.jpg",
        },
        {
          id: "super-man",
          title: "Super Man",
          url: "./assets/super man.jpg",
        },
  
        {
          id: "venom",
          title: "Venom",
          url: "./assets/venom.jpg",
        },
        {
          id: "hulk",
          title: "Hulk",
          url: "./assets/hulk.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderE1 = this.createBorder(position, item.id);
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderE1.appendChild(thumbNail);
        // Title Text Element
        const titleE1 = this.createTitleE1(position, item);
        borderE1.appendChild(titleE1);
        this.placesContainer.appendChild(borderE1);
      }
    },
    createBorder: function (position, id) {
      const entityE1 = document.createElement("a-entity");
      entityE1.setAttribute("id", id);
      entityE1.setAttribute("visible", true);
      entityE1.setAttribute("geometry", {
        primitive: "box",
        width: 15,
        height: 15,
      });
      entityE1.setAttribute("position", position);
      entityE1.setAttribute("material", {
        color:"white",
        opacity:1,
      })
      return entityE1;
    },
    createThumbNail: function (item) {
      const entityE1 = document.createElement("a-entity");
      entityE1.setAttribute("visible", true);
      entityE1.setAttribute("geometry", {
        primitive: "box",
        width: 15,
        height: 15,
      });
      entityE1.setAttribute("material", {src: item.url});
      return entityE1;
    },
    createTitleE1: function (position,item) {
      const entityE1 = document.createElement("a-entity");
      entityE1.setAttribute("text", {
        font: "exo2bold",
        align: "centre",
        width: 80,
        color: "blue",
        value: item.title,
  
      });
      const elPosition = position;
      elPosition.y = -15;
      elPosition.x=-5
      entityE1.setAttribute("position", elPosition);
      entityE1.setAttribute("visible", true);
      return entityE1
    }, 
    
  });
  