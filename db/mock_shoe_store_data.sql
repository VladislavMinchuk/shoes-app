
-- Categories
INSERT INTO categories (id, name) VALUES 
('5aabce77-d3d3-4f13-bb4f-661ef7f5acc3', 'Жіноче взуття'),
('4cc4657d-9029-4530-9ba4-ba71969a8e72', 'Чоловіче взуття'),
('3901ef8d-609d-4152-b637-41b265849944', 'Дитяче взуття');

-- Products
INSERT INTO products (id, name, price, category_id, is_available) VALUES 
('d35b7d24-a8f3-43a4-a66a-51fc5307e355', 'Кеди жіночі Classic', 1799.99, '5aabce77-d3d3-4f13-bb4f-661ef7f5acc3', TRUE),
('f8011ebf-09c0-474e-a31e-9a30b86c40c0', 'Кросівки чоловічі Sport', 2499.00, '4cc4657d-9029-4530-9ba4-ba71969a8e72', TRUE),
('09c87a9e-e429-4932-b9f3-15a1e1e8ff18', 'Черевики дитячі Warmy', 1299.50, '3901ef8d-609d-4152-b637-41b265849944', TRUE);

-- Product Images
INSERT INTO product_images (id, product_id, url) VALUES
(gen_random_uuid(), 'd35b7d24-a8f3-43a4-a66a-51fc5307e355', 'https://example.com/shoe1.jpg'),
(gen_random_uuid(), 'f8011ebf-09c0-474e-a31e-9a30b86c40c0', 'https://example.com/shoe2.jpg'),
(gen_random_uuid(), '09c87a9e-e429-4932-b9f3-15a1e1e8ff18', 'https://example.com/shoe3.jpg');

-- Product Colors
INSERT INTO product_colors (id, product_id, color_hex, color_name) VALUES
(gen_random_uuid(), 'd35b7d24-a8f3-43a4-a66a-51fc5307e355', '#FFFFFF', 'Білий'),
(gen_random_uuid(), 'f8011ebf-09c0-474e-a31e-9a30b86c40c0', '#000000', 'Чорний');

-- Product Sizes
INSERT INTO product_sizes (id, product_id, size, is_available) VALUES
(gen_random_uuid(), 'd35b7d24-a8f3-43a4-a66a-51fc5307e355', 37, TRUE),
(gen_random_uuid(), 'd35b7d24-a8f3-43a4-a66a-51fc5307e355', 38, TRUE),
(gen_random_uuid(), 'f8011ebf-09c0-474e-a31e-9a30b86c40c0', 42, TRUE);

-- Users
INSERT INTO users (id, email, password_hash, name) VALUES
('b2d57b87-d804-4936-a226-d12f6ad1d5f7', 'test@example.com', 'hashedpassword', 'Test User');

-- Wishlist
INSERT INTO wishlist (id, user_id, product_id) VALUES
(gen_random_uuid(), 'b2d57b87-d804-4936-a226-d12f6ad1d5f7', 'd35b7d24-a8f3-43a4-a66a-51fc5307e355');

-- Cart Items
INSERT INTO cart_items (id, user_id, product_id, size, quantity) VALUES
(gen_random_uuid(), 'b2d57b87-d804-4936-a226-d12f6ad1d5f7', 'f8011ebf-09c0-474e-a31e-9a30b86c40c0', 42, 1);

-- Orders
INSERT INTO orders (id, user_id, status, total_price, created_at) VALUES
('ed01e55a-f8ec-4030-bdc6-3039bc9e927b', 'b2d57b87-d804-4936-a226-d12f6ad1d5f7', 'completed', 2499.00, NOW());

-- Order Items
INSERT INTO order_items (id, order_id, product_id, size, quantity, price) VALUES
(gen_random_uuid(), 'ed01e55a-f8ec-4030-bdc6-3039bc9e927b', 'f8011ebf-09c0-474e-a31e-9a30b86c40c0', 42, 1, 2499.00);
