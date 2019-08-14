/*
 * Created by Artyom Manchenkov
 * artyom@manchenkoff.me
 * manchenkoff.me © 2019
 */

// import and register components
import Autocomplete from './widgets/autocomplete'
import Calendar from './widgets/calendar'
import Chips from './widgets/chips'
import Slider from './widgets/slider'
import Tabs from './widgets/tabs'
import Toast from './widgets/toast'

window.Spectre = {
    Autocomplete,
    Calendar,
    Chips,
    Slider,
    Tabs,
    Toast
};

window.onload = () => {
    Autocomplete.register();
    Calendar.register();
    Chips.register();
    Slider.register();
    Tabs.register();
    Toast.register();
};