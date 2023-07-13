import Recipe from '../../../src/Pages/Recipe/Recipe'
import Rating from '../../../src/Components/Recipe/Rating/Rating'
import renderer from "react-test-renderer";

var recipe_dict = {
    "guid": "foobar",
    "name": "Baz's Famous Maccaroni And Cheese",
    "version": "v1.1.1",
    "description": "This is a tasty dish that kept baz alive in college.",
    "authors": [
        "@Shebaz",
        "@some-other-guy"
    ],
    "nutrition_facts": {
        "serving_info": {
            "servings":"6",
            "serving_size": "6 bowls"
        },
    },
    "prep_time": {
        "quantity": 45,
        "unit": "min"
    },
    "rating": "5",
    "based_on": null,
    "reviews": [
        {
            "author": "@Jim",
            "comment": "It was dank!",
            "rating": 4.5
        }
    ],
    "tags": [],
    "classifications": {},
    "ingredients": [
        {
            "name": "shreded cheese",
            "quantity": "1",
            "unit": "cup"
        },
        {
            "name": "noddles",
            "quantity": "1",
            "unit": "package"
        }
    ],
    "tools": [
        "stove top",
        "pot",
        "spoon"
    ],
    "instructions": [
        {
            "description": "Boil the noodles.",
            "tools": [0, 1],
            "ingredients":[0]
        },
        {
            "description": "Put the cheese on the noodles.",
            "tools": [1],
            "ingredients":[0, 1]
        },
        {
            "description": "Stir the noodles an the cheese.",
            "tools": [1, 2],
            "ingredients":[0, 1]
        }
    ]
}

describe("When loading a rating", () => {
    test('It renders properly', () => {

        // Create the component
        var rating = Rating(recipe_dict)

        // Create the DOM tree of the rendered component in JSON format.
        const domTree = renderer.create(rating).toJSON();

        // Create a snapshot if it does not exist, save it, and check if the snapshot is 
        // consistent with previous stored snapshots. If there is an existing snapshot, 
        // Jest compares the two snapshots. If they match, the test passes. Snapshots that 
        // do not match cause the test to fail.
        expect(domTree).toMatchSnapshot();
    });
   })