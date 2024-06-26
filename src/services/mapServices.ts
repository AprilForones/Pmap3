import { Beacon, Category, ObjectItem } from "@/utils/types";
import apiService from "./apiService";


export async function getObjects(): Promise<ObjectItem[]> {
  try {
    const response =  await fetch("db.json");
    const data = await response.json();

    // console.log(data.objects);

    return data.objects;
  } catch (error) {
    console.error("Error fetching objects:", error);
    throw error;
  }
}

export async function getObjectById(id: string): Promise<ObjectItem> {
  try {
    const response = await fetch("db.json");
    const data = await response.json();
    const object = data.objects.find((obj: ObjectItem) => obj.id === id);

    // console.log('Single object', object);

    if (!object) {
      throw new Error(`Object with ID ${id} not found`);
    }
    return object;
  } catch (error) {
    console.error(`Error fetching object with ID ${id}:`, error);
    throw error;
  }
}

// export async function getCategories(): Promise<Category[]> {
//   try {
//     const response = await apiService.get("/categories");
//     return response.data as Category[];
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     throw error;
//   }
// }

export async function getCategories(): Promise<Category[]> {
  try {
    // const response = await apiService.get("/categories");
    // return response.data as Category[];
    const response =  await fetch("db.json");
    const data = await response.json();

    // console.log(data.categories );

    return data.categories;

  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function createCategory(
  newCategory: Partial<Category>
): Promise<Category | null> {
  try {
    // const response = await apiService.post("/categories", newCategory);
    // return response.data as Category;

    const response = await fetch("db.json");
    const data = await response.json();
    const categor = data.categor.find((categ: Category) => categ.id === newCategory.id);
    console.log('Single object', categor);

    if (!categor) {
      throw new Error(`Category with ID ${newCategory} not found`);
    }
    return categor;

  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}

export async function deleteCategory(id: string): Promise<void> {
  try {
    // await apiService.delete(`/categories/${id}`);
    const response = await fetch("db.json");
    const data = await response.json();
    const categor = data.categor.find((categ: Category) => categ.id === id);

    console.log('Single categories', categor);

    if (!categor) {
      throw new Error(`categories with ID ${id} not found`);
    }
    return categor;

  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
}

export async function updateObject(  id: string,  updatedData: Partial<ObjectItem>): Promise<ObjectItem | null> {
  try {
    // const response = await apiService.put(`/objects/${id}`, updatedData);
    // return response.data as ObjectItem;
    const response = await fetch("db.json");
    const data = await response.json();
    //const object = data.objects.find((obj: ObjectItem) => updatedData);
    const object = data.objects.find((obj: ObjectItem) => obj.id === id);

    // console.log('Single object', object);

    if (!object) {
      throw new Error(`Object with ID ${id} not found`);
    }
    return object;

  } catch (error) {
    console.error(`Error updating object with ID ${id}:`, error);
    throw error;
  }
}


export async function updateCategory(
  id: string,
  updatedData: Partial<Category>
): Promise<Category | null> {
  try {
    // const response = await apiService.put(`/categories/${id}`, updatedData);
    // return response.data as Category;

    const response = await fetch("db.json");
    const data = await response.json();
    const categor = data.categories.find((categ: Category) => categ.id === updatedData.id);

    console.log('Single object', categor);

    if (!categor) {
      throw new Error(`Object with ID ${id} not found`);
    }
    return categor;

  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    throw error;
  }
}

export async function getBeacon(): Promise<Beacon[]> {
  try {
    const response = await apiService.get("/fingerprints");
    return response.data as Beacon[];
  } catch (error) {
    console.error("Error fetching beacons:", error);
    throw error;
  }
}
