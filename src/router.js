import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import ComponentLists from './views/ComponentLists';
import ButtonView from './views/ButtonView';
// import ButtonView from './docs/Button.md';
import ModalView from './views/ModalView';
import DrawerView from './views/DrawerView';
import ToggleView from './views/ToggleView';
import DropdownView from './views/DropdownView';
import DropGroupView from './views/DropGroupView';
import SelectView from './views/SelectView';
import BadgeView from './views/BadgeView';
import DividerView from './views/DividerView';
import CarouselTextView from './views/CarouselTextView';
import TabsView from './views/TabsView';
import HeadersView from './views/HeadersView';
import BreadcrumbView from './views/BreadcrumbView';

import PickerTimeView from './views/PickerTimeView';
import PickerDayView from './views/PickerDayView';
import PickerWeekView from './views/PickerWeekView';
import PickerYearView from './views/PickerYearView';
import PickerMonthView from './views/PickerMonthView';
import TreeView from './views/TreeView';
import ShakeView from './views/ShakeView';
import StickView from './views/StickView';

import MessageView from './views/MessageView';

export default new Router({
    // mode: 'history',
    // scrollBehavior: () => ({x: 0, y: 0}),
    linkActiveClass: 'activeStyle',
    routes: [
        {
            path: '/componentLists',
            name: 'ComponentLists',
            component: ComponentLists,
            meta: {
                title: 'ComponentLists'
            }
        },

        {
            path: '/buttonView',
            name: 'ButtonView',
            component: ButtonView,
            meta: {
                title: 'ButtonView'
            }
        },
        {
            path: '/modalView',
            name: 'ModalView',
            component: ModalView,
            meta: {
                title: 'ModalView'
            }
        },
        {
            path: '/drawerView',
            name: 'DrawerView',
            component: DrawerView,
            meta: {
                title: 'DrawerView'
            }
        },
        {
            path: '/dropGroupView',
            name: 'DropGroupView',
            component: DropGroupView,
            meta: {
                title: 'DropGroupView'
            }
        },
        {
            path: '/toggleView',
            name: 'ToggleView',
            component: ToggleView,
            meta: {
                title: 'ToggleView'
            }
        },
        {
            path: '/selectView',
            name: 'SelectView',
            component: SelectView,
            meta: {
                title: 'SelectView'
            }
        },
        {
            path: '/dropdownView',
            name: 'DropdownView',
            component: DropdownView,
            meta: {
                title: 'DropdownView'
            }
        },
        {
            path: '/badgeView',
            name: 'BadgeView',
            component: BadgeView,
            meta: {
                title: 'BadgeView'
            }
        },
        {
            path: '/dividerView',
            name: 'DividerView',
            component: DividerView,
            meta: {
                title: 'DividerView'
            }
        },
        {
            path: '/carouselTextView',
            name: 'CarouselTextView',
            component: CarouselTextView,
            meta: {
                title: 'CarouselTextView'
            }
        },
        {
            path: '/tabsView',
            name: 'TabsView',
            component: TabsView,
            meta: {
                title: 'TabsView'
            }
        },
        {
            path: '/breadcrumbView',
            name: 'BreadcrumbView',
            component: BreadcrumbView,
            meta: {
                title: 'BreadcrumbView'
            }
        },

        // 组合组件
        {
            path: '/headersView',
            name: 'HeadersView',
            component: HeadersView,
            meta: {
                title: 'HeadersView'
            }
        },
        {
            path: '/pickerTimeView',
            name: 'PickerTimeView',
            component: PickerTimeView,
            meta: {
                title: 'PickerTimeView'
            }
        },
        {
            path: '/pickerDayView',
            name: 'PickerDayView',
            component: PickerDayView,
            meta: {
                title: 'PickerDayView'
            }
        },
        {
            path: '/pickerWeekView',
            name: 'PickerWeekView',
            component: PickerWeekView,
            meta: {
                title: 'PickerWeekView'
            }
        },
        {
            path: '/pickerYearView',
            name: 'PickerYearView',
            component: PickerYearView,
            meta: {
                title: 'PickerYearView'
            }
        },
        {
            path: '/pickerMonthView',
            name: 'PickerMonthView',
            component: PickerMonthView,
            meta: {
                title: 'PickerMonthView'
            }
        },
        {
            path: '/treeView',
            name: 'TreeView',
            component: TreeView,
            meta: {
                title: 'TreeView'
            }
        },
        {
            path: '/shakeView',
            name: 'ShakeView',
            component: ShakeView,
            meta: {
                title: 'ShakeView'
            }
        },
        {
            path: '/stickView',
            name: 'StickView',
            component: StickView,
            meta: {
                title: 'StickView'
            }
        },

        // 函数组件
        {
            path: '/messageView',
            name: 'MessageView',
            component: MessageView,
            meta: {
                title: 'MessageView'
            }
        },
        {
            path: '/',
            redirect: '/componentLists'
        }
    ]
});
