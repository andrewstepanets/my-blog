import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --indigo-100: #e0e7ff;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-900: #312e81;
  --gray-100: #f3f4f6;
  --gray-500: #6b7280;
  --gray-800: #1f2937;
}

html,
body {
  height: 100%;
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 300;
  background-color: #f4f7f9;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.clickable {
  cursor: pointer;
}

.hoverable:hover {
  opacity: 0.7;
}

.red-text {
  color: #f44336 !important;
}

.page-wrapper {
  padding-top: 20px;
}

.card.as-card {
  // padding-top: 50px;
  .card-body-wrapper {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.15);
    min-height: 280px;
    position: relative;
    z-index: 2;
    padding: 20px;
    padding-bottom: 40px;
  }

  .card-body {
    padding: 15px 0px 0px;

    .card-title {
      font-weight: bold;
      margin-bottom: 3px;
    }
  }

  .card-date {
    font-size: 13px;
  }

  .card-main-title {
    font-size: 22px;
  }

  .card-header {
    background-color: transparent;
    padding: 0px 0px 15px;
    img {
      --size: 45px;
      background-color: #fff;
      border: 1px solid #464646;
      border-radius: 50%;
      // box-shadow: 2px 5px 25px rgba(0, 0, 0, .15);
      // left: 10px;
      // position: absolute;
      top: calc(-1 * (var(--size) / 2));
      width: var(--size);
      height: var(--size);
    }
  }

  .card-button {
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    font-family: var(--font-family-primary);
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.15rem;
    padding-top: 1.5rem !important /* @TODO temp !!!*/;
    padding: 0.75rem 1.5rem;
    background-color: var(--indigo-500);
    border-color: var(--indigo-700);
    box-shadow: 0 5px 0 var(--indigo-900);
    bottom: -45px;
    position: absolute;
    right: 1.5rem;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;

    &:hover {
      background-color: var(--indigo-500);
      border-color: var(--indigo-700);
      -webkit-transform: translateY(0.25rem);
      transform: translateY(0.25rem);
    }
  }

  &.as-card-list {
    .card-body-wrapper {
      min-height: 180px;
      // position: relative;
      // z-index: 2;
      // padding: 20px;
      // padding-bottom: 40px;
    }

    .card-header {
      background-color: transparent;
      padding-bottom: 5px;
    }
  }
}

.card.as-card.placeholder {
  color: transparent;
  .image-placeholder {
    height: 200px;
    width: 100%;
    background-color: #bebebe;
  }

  .card-title,
  .card-text,
  .card-date {
    background-color: #bebebe;
  }
}

.card {
  margin-bottom: 60px;
}

// HEADER STARTS
.as-navbar.as-nav-base {
  width: 100%;
  padding: 20px 0px;

  .as-navbar {
    &-brand a {
      color: var(--indigo-500);
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      transition: color 0.4s ease;

      &:hover {
        color: var(--indigo-900);
        text-decoration: none;
      }
    }

    &-item {
      margin-left: 10px;
      margin-right: 10px;
    }

    &-link {
      color: var(--indigo-500);
      letter-spacing: 0.8px;
      font-size: 18px;
      text-transform: uppercase;
      transition: color 0.4s ease;

      &.active {
        color: var(--indigo-900);
      }

      &:hover,
      &:focus {
        color: var(--indigo-900);
      }
    }
  }

  .as-dropdown-menu {
    .as-dropdown-item {
      color: #4e4e4e;

      &.active {
        color: #dba919;
      }
    }

    .as-dropdown-toggle {
      color: white;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}

.as-navbar.as-nav-base.as-nav-default {
  padding: 30px;
  background-color: black !important;
}

.bg-transparent.menu-open {
  background-color: #2c3e50 !important;
}

.bg-transparent.menu-close {
  transition: 1s;
}
// HEADER ENDS

.card-header {
  display: flex;
  // justify-content: center;
  align-items: center;

  &-title {
    margin-bottom: 0;
  }
}

.hljs {
  padding: 20px 20px 10px;
  border-radius: 10px;
}

.code-filename,
.image-alt {
  opacity: 0.6;
  margin-top: 10px;
  font-style: italic;
  font-size: 14px;
}

.blog-image {
  margin-bottom: 10px;
  text-align: center;

  &-left {
    float: left;
    margin-right: 30px;
  }
  &-right {
    float: right;
    margin-left: 30px;
  }
}
.image-alt {
  margin-top: 3px;
}

.blog-detail-page {
  font-size: 19px;

  .blog-detail-header {
    .lead {
      font-size: 17px;
    }
    &-title {
      font-size: 52px;
    }
  }
}

.admin-intro {
  .welcome-text {
    font-size: 18px;
  }
}

.dark {
  .card.as-card {
    background-color: #232129;
    transition: color 0s ease-out 0s, background 0.2s ease-out 0s;
    .card-body-wrapper {
      background-color: #232129;
      transition: color 0s ease-out 0s, background 0.2s ease-out 0s;
    }

    .card-button {
      background-color: #9b5f5f;
    }
  }

  .as-navbar.as-nav-base {
    width: 100%;
    padding: 20px 0px;

    .as-navbar {
      &-brand {
        color: #ffffff;
      }

      &-link {
        color: #ffffff;
      }
    }
  }
}

.day-night-toggle.react-toggle {
  &.react-toggle--checked:hover {
    &:not(.react-toggle--disabled) .react-toggle-track {
      background-color: black;
    }
  }

  .react-toggle-track {
    background-color: black;
    &:hover {
      background-color: black;
    }

    &-x,
    &-check {
      right: 8px;
      width: 15px;
      height: 15px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.page-footer {
  padding: 40px;
  font-size: 20px;
  text-align: center;

  a {
    color: #63696e;
  }
}
`;

export default GlobalStyles;