class YOYITBlock {
    getInfo() {
        return {
            "id": "YOYIT-Block",
            "name": "YOYIT-Block",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": {
            nal: define extension-specific menus here.
        menus: {
            // Required: an identifier for this menu, unique within this extension.
            menuA: [
                // Static menu: list items which should appear in the menu.
                {
                    // Required: the value of the menu item when it is chosen.
                    value: 'itemId1',
                    // Optional: the human-readable label for this item.
                    // Use `value` as the text if this is absent.
                    text: 'Item One'
                },
                // The simplest form of a list item is a string which will be used as
                // both value and text.
                'itemId2'
            ],
            // Dynamic menu: a string naming a function which returns an array as above.
            // Called each time the menu is opened.
            menuB: 'getItemsForMenuB'
        }
    };
}
Scratch.extensions.register(new YOYITBlock());
