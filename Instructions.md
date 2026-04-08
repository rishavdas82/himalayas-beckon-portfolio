# Backend Integration & Content Management Instructions

This document provides definitive instructions for backend developers or site administrators on how to update the contents of the "Himalaya's Beckon" website without altering the core React logic.

---

## Part 1: Managing Images

The website serves static image assets directly from the `public/assets/` directory.

### ✅ How to Add an Image
1. Prepare your new image, ensuring it is optimized for the web (e.g., standard JPEG, PNG, or WebP formats).
2. Place the image file into the `public/assets/` directory.
3. To use the image in your data, reference it via its absolute path starting from the root (e.g., if you added `k2_summit.jpg`, reference it in the JSON as `"/assets/k2_summit.jpg"`).

### 🔄 How to Update an Image
To seamlessly update an existing image (such as the main logo or a background banner) without changing any code:
1. Ensure the new image has the exact same name and file extension as the one you wish to replace.
2. Drag and drop the new image into `public/assets/` and choose to **overwrite/replace** the existing file.
3. The frontend application will instantly serve the new image.

### ❌ How to Delete an Image
1. Locate the unused image inside `public/assets/` and delete it securely.
2. **CRITICAL:** Ensure that you have removed any references to this image path inside your JSON databases (`treks.json` / `expeditions.json`). Failing to do so will result in broken "image not found" indicators on the frontend grid.

---

## Part 2: Managing Treks & Expeditions (The JSON Database)

The frontend's UI layer is fully decoupled from its data. The lists of Treks and Expeditions are fetched asynchronously using the `useData()` hook, which currently points to the mock backend files:
- `public/data/treks.json`
- `public/data/expeditions.json`

To manipulate the list of adventures, follow these exact steps when interacting with the JSON objects:

### ✅ Adding a New Trek or Expedition
To append a new adventure to the frontend grid, open the respective `JSON` file and add a new object to the array. Ensure it complies strictly with this schema:

```json
{
  "id": "unique-id-string",
  "title": "Name of the Trek/Expedition",
  "meta": "Duration / Max Altitude (e.g., '14 Days / 5,364m')",
  "img": "/assets/your_new_image.jpg",
  "desc": "A brief, compelling description of the adventure."
}
```
*Note: Ensure to separate blocks with a comma `,` except for the final item in the array.*

### 🔄 Updating an Existing Trek or Expedition
1. Open either `public/data/treks.json` or `public/data/expeditions.json`.
2. Locate the specific adventure you wish to edit (you can search by `"id"` or `"title"`).
3. Modify the desired strings within the quotes (e.g., changing `"desc": "Old description"` to `"desc": "New, updated description."`).
4. Save the file. The React frontend will dynamically re-fetch the data upon page reload and render your changes cleanly.

### ❌ Deleting a Trek or Expedition
1. Open the respective JSON file.
2. Carefully locate the full `{ ... }` object block corresponding to the item you wish to remove.
3. Delete the entire object from the array. 
4. Check your JSON syntax! If you delete the last item in the array, ensure the item before it does not end with a trailing comma.
5. Save the file. The grid will automatically adjust to display the remaining items seamlessly.
