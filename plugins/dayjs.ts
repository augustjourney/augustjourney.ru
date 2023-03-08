import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import 'dayjs/locale/ru';

export default defineNuxtPlugin((nuxtApp) => {
	dayjs.locale('ru');
	dayjs.extend(relativeTime);
	nuxtApp.provide('dayjs', dayjs);
});
