import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useParams } from 'react-router';
import { useMyProductsContext } from '../../contexts/MyProductsContext';
import styles from './ProductForm.module.css';

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const ProductSchema = z.object({
  title: z.string().min(1, 'Product name is required'),
  price: z.number().positive('Price must be a positive number').or(z.nan()),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
  image: z
    .any()
    .refine(files => files?.length === 1, 'Image is required.')
    .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 1MB.`)
    .refine(
      files => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png, and .webp files are accepted.'
    ),
});

type ProductFormInputs = z.infer<typeof ProductSchema>;

const categories = [
  'Electronics',
  'Jewelery',
  "Men's Clothing",
  "Women's Clothing",
];

function ProductForm({ mode }: { mode: 'create' | 'edit' }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(ProductSchema),
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const { addProduct, products, editProduct } = useMyProductsContext();

  useEffect(() => {
    if (mode === 'edit' && id) {
      const productToEdit = products.find(product => product.id === id);
      if (productToEdit) {
        setValue('title', productToEdit.title);
        setValue('price', productToEdit.price);
        setValue('category', productToEdit.category);
        setValue('description', productToEdit.description);
      }
    }
  }, [id, mode, products, setValue]);

  const convertToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const onSubmit = async (data: ProductFormInputs) => {
    const imageBase64 = await convertToBase64(data.image[0]);

    if (mode === 'create') {
      const newProduct = {
        ...data,
        image: imageBase64,
        id: new Date().toISOString(),
      };
      addProduct(newProduct);
    } else if (mode === 'edit' && id) {
      const existingProduct = products.find(product => product.id === id);
      const updatedProduct = {
        ...data,
        image: imageBase64 || existingProduct?.image,
        id,
      };

      editProduct(id, updatedProduct);
      navigate('/my-products');
    }

    reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {mode === 'create' ? 'Create Product' : 'Edit Product'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor='title' className={styles.label}>
            Product Name
          </label>
          <input
            type='text'
            id='title'
            placeholder='Enter product name'
            className={styles.input}
            {...register('title')}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='price' className={styles.label}>
            Price
          </label>
          <input
            type='number'
            id='price'
            placeholder='Enter product price'
            className={styles.input}
            {...register('price', { valueAsNumber: true })}
          />
          {errors.price && (
            <p className={styles.error}>{errors.price.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='category' className={styles.label}>
            Category
          </label>
          <select
            id='category'
            className={styles.select}
            {...register('category')}
          >
            <option value=''>Select a category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className={styles.error}>{errors.category.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='description' className={styles.label}>
            Description
          </label>
          <textarea
            id='description'
            placeholder='Enter product description'
            className={styles.textarea}
            {...register('description')}
          />
          {errors.description && (
            <p className={styles.error}>{errors.description.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='image' className={styles.label}>
            Upload Image
          </label>
          <input
            type='file'
            id='image'
            className={styles.inputFile}
            accept='image/png, image/jpeg, image/jpg'
            {...register('image')}
          />
          {errors.image?.message && (
            <p className={styles.error}>{String(errors.image.message)}</p>
          )}
        </div>

        <button type='submit' className={styles.button}>
          {mode === 'create' ? 'Add Product' : 'Update Product'}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
