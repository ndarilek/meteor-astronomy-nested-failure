const Widget1 = Astro.Class({
  name: "Widget1",
  collection: new Mongo.Collection("widgets1"),
  fields: {
    embedded: {
      type: "object",
      nested: {
        name: "Embedded1",
        fields: {
          value: {
            type: "boolean",
            default: true
          }
        }
      },
    }
  }
})

const Widget2 = Astro.Class({
  name: "Widget2",
  collection: new Mongo.Collection("widgets2"),
  fields: {
    embedded: {
      type: "object",
      nested: {
        name: "Embedded2",
        fields: {
          value: {
            type: "boolean"
          }
        }
      },
      default: () => {value: true}
    }
  }
})

const Widget3 = Astro.Class({
  name: "Widget3",
  collection: new Mongo.Collection("widgets3"),
  fields: {
    embedded: {
      type: "object",
      nested: {
        name: "Embedded3",
        fields: {
          value: "boolean"
        }
      },
      default: () => {value: true}
    }
  }
})

const Widget4 = Astro.Class({
  name: "Widget4",
  collection: new Mongo.Collection("widgets4"),
  fields: {
    embedded: {
      type: "object",
      nested: {
        name: "Embedded4",
        fields: {
          value: {
            type: "boolean",
            default: () => true
          }
        }
      },
    }
  }
})

Meteor.startup(() => {
  Widget1.remove({})
  Widget2.remove({})
  Widget3.remove({})
  Widget4.remove({})
  const widget1_1 = new Widget1({})
  widget1_1.save()
  //console.log("widget1_1", widget1_1)
  console.log("Hey, where's widget1's embedded value?", widget1_1.embedded)
  const widget2_1 = new Widget2({})
  widget2_1.save()
  //console.log("widget2_1", widget2_1)
  console.log("Widget2 embedded, where are you?", widget2_1.embedded)
  const widget3_1 = new Widget3({})
  widget3_1.save()
  //console.log("widget3_1", widget3_1)
  console.log("Where oh where?", widget3_1.embedded)
  const widget4_1 = new Widget4({})
  widget4_1.save()
  //console.log("widget4_1", widget4_1)
  console.log("Where oh where?", widget4_1.embedded)
})
