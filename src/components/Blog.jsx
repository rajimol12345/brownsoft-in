import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css';

const categories = [
  { name: 'Motion and Graphics', count: 4 },
  { name: 'Digital Marketing', count: 3 },
  { name: 'UI/UX', count: 1 },
  { name: 'Web Development', count: 1 },
  { name: 'Partnership', count: 1 }
];

const recentPosts = [
  {
    id: 1,
    title: 'Top 5 Most Famous Technology Trend In 2024',
    date: 'April 9, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    title: 'Simplify Streamline Succeed IT Solutions',
    date: 'April 21, 2024',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 3,
    title: 'Unlocking Potential Through Technology',
    date: 'April 21, 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150'
  }
];

const tags = ['News', 'Business', 'SMM', 'Technology', 'AI', 'Modern', 'Science'];

import { 
  FaSearch, 
  FaUser, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaArrowRight 
} from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1 className="hero-title">Blog</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight className="breadcrumb-separator" />
            <span>Blog</span>
          </div>
        </div>
      </section>

      <section className="blog-main-content">
        <div className="container">
          <div className="blog-layout">
            <div className="blog-grid-side">
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <div key={post.id} className="blog-card">
                    <div className="blog-image">
                      <Link to={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                      <div className="blog-category">{post.category}</div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="blog-author">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                          </svg>
                          {post.author}
                        </span>
                        <span className="blog-date">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor"/>
                          </svg>
                          {post.date}
                        </span>
                      </div>
                      <h2 className="blog-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <Link to={`/blog/${post.id}`} className="read-more-btn">
                        READ MORE
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="currentColor"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pagination">
                <button className="page-btn">‹</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">›</button>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search here" />
                  <button className="search-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                      <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="sidebar-widget category-widget">
                <h3 className="widget-title">Category</h3>
                <ul className="category-list">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link to="#">
                        <span>{cat.name}</span>
                        <span>({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts-list">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="recent-post-item">
                      <div className="recent-post-thumb">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="recent-post-info">
                        <span className="recent-post-date">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" fill="currentColor"/>
                          </svg>
                          {post.date}
                        </span>
                        <h4 className="recent-post-title">
                          <Link to="#">{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget tags-widget">
                <h3 className="widget-title">Tags</h3>
                <div className="tags-cloud">
                  {tags.map((tag, index) => (
                    <Link key={index} to="#" className="tag-link">{tag}</Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
