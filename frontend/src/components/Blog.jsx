import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './data/blogData';
import { 
  FaSearch, 
  FaUser, 
  FaCalendarAlt, 
  FaChevronRight, 
  FaArrowRight 
} from 'react-icons/fa';
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

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

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
                {currentPosts.map((post) => (
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
                          <FaUser className="me-1" />
                          {post.author}
                        </span>
                        <span className="blog-date">
                          <FaCalendarAlt className="me-1" />
                          {post.date}
                        </span>
                      </div>
                      <h2 className="blog-title">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <Link to={`/blog/${post.id}`} className="read-more-btn">
                        READ MORE
                        <FaArrowRight className="ms-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pagination">
                <button 
                  className="page-btn" 
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i + 1} 
                    className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  className="page-btn" 
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
              </div>
            </div>

            <aside className="blog-sidebar">
              <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Search</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search here" />
                  <button className="search-btn">
                    <FaSearch />
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
                          <FaCalendarAlt className="me-1" />
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