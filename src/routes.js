import Main from './components/Main.vue'
import StartStep from './components/features/qaReview/StartStep.vue'
import SecondStep from './components/features/qaReview/SecondStep.vue'
import ContactMe from './components/staticPages/ContactMe.vue'
import FunnyDogs from './components/staticPages/FunnyDogs.vue'
import DevicesPoznan from './components/features/testDevices/testDevicesList.vue'

export const routes = [
    { path: '/', component: Main },
    { path: '/qa-review/1', component: StartStep },
    { path: '/qa-review/2', component: SecondStep },
    { path: '/funny-dogs', component: FunnyDogs },
    { path: '/testing_devices/poznan', component: DevicesPoznan},
    { path: '/contact-me/why-the-heck-would-u-like-to-contact-me-anyways/you-creep/xDDDDD', component: ContactMe }
]