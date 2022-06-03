function TopBar() {
  return (
    <div className="navigation-bar">
      <div>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="404! not found"
          width="30"
          height="30"
        />{' '}
      </div>
      <span className="primary react"> React</span>

      <div>
        <nav className="navigation white">
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
          <li>Community</li>
        </nav>
      </div>
      <div className="search">
        <input type="text" className="search-box" placeholder="Search" />
      </div>

      <div className="navigation-footer white">
        <div className="navigation-footer-item">v18.1.0</div>
        <div className="navigation-footer-item language">
          <img
            src="https://cdn0.iconfinder.com/data/icons/translation/513/translation-translate-language_2_copy_5-256.png"
            alt=""
            width="30"
            height="30"
          ></img>
          <div>Languages</div>
        </div>
        <div className="navigation-footer-item git">
          GitHub
          <div>
            <img
              src="https://www.shareicon.net/data/2016/11/14/852226_link_512x512.png"
              alt=""
              width="15"
              height="15"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
