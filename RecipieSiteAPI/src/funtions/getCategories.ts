import { Category, Root } from "../types";
import '../components/_categoryComponent.scss';
import { DomElements } from "../domElements";

const categortURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';   

export const getCategories = async () => {
    const url = `${categortURL}`;
    const response = await fetch(url);
    const data: Root = await response.json() as Root;
    const category: Category[] = data.categories.map((cat) => ({
        idCategory: cat.idCategory,
        strCategory: cat.strCategory,
        strCategoryDescription: cat.strCategoryDescription,
        strCategoryThumb: cat.strCategoryThumb
    }));
    return category;
};

export const getAllImages = async () => {
    const categories = await getCategories() as Category[];
    const categoryImageContainer = document.createElement('div') as HTMLElement;

    const images = categories.map((category) => {

        categoryImageContainer.classList.add('category-container');
        DomElements.main.appendChild(categoryImageContainer);

        return category.strCategoryThumb;
    });

    images.forEach(image => {
        const categoryImage = document.createElement('div') as HTMLElement;
        const categoryImageName = document.createElement('h2') as HTMLElement;
        categoryImage.style.backgroundImage = `url(${image})`;
        categoryImage.classList.add('category-image');
        categoryImageContainer.appendChild(categoryImage);
        categoryImage.appendChild(categoryImageName);
        categoryImageName.textContent = categories[images.indexOf(image)].strCategory;
        categoryImageName.classList.add('category-image-name');
    });

    return images;
}

export const getCatergoryName = async () => {
    const categories = await getCategories() as Category[];
    const categoryName = categories.map((category) => {
        categories
        return category.strCategory;
    });
    return categoryName;
}