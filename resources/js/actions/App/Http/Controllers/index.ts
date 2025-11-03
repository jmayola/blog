import Auth from './Auth'
import BlogController from './BlogController'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    BlogController: Object.assign(BlogController, BlogController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers