import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/pages/auth/guards/auth/auth.guard';
import { WelcomeGuard } from 'src/pages/welcome/guards/welcome.guard';

/**
 * base route forRoot of application.
 * The app defaults to welcome page when it is opened but there is a guard to check if user is login in.
 * if user us logged in, we redirect to dashboard page.
 * Auth guard will redirect user to authentication pages if user is logged out, or allow access to a page is user is logged in
 * The app uses lazy loading to load modules
 * but { preloadingStrategy: PreloadAllModules } is used to make sure all modules are preloaded to begin with for performance reasons
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
	{
		path: 'video-room/:roomName/video',
    loadChildren: './video-room/video-room.module#VideoRoomPageModule'
//    loadChildren: () => import('./video-room/video-room.module').then((m) => m.VideoRoomPageModule)
	},
	{
		path: 'voice-room/:roomName/voice',
		loadChildren: './voice-room/video-room.module#VoiceRoomPageModule'
  },
  { path: 'groups', loadChildren: '../pages/groups/groups.module#GroupsPageModule' },
  { path: 'enlarge-image', loadChildren: '../pages/enlarge-image/enlarge-image.module#EnlargeImagePageModule' },
  { path: 'new-groups', loadChildren: '../pages/new-groups/new-groups.module#NewGroupsPageModule' },
  { path: 'groups-chat', loadChildren: '../pages/groups-chat/groups-chat.module#GroupsChatPageModule' },
  { path: 'group-info', loadChildren: '../pages/group-info/group-info.module#GroupInfoPageModule' },
  { path: 'addmembers', loadChildren: '../pages/addmembers/addmembers.module#AddmembersPageModule' },
  {
    canActivate: [WelcomeGuard],
    path: 'welcome',
    loadChildren: () => import('../pages/welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../pages/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'dashboard',
    loadChildren: () => import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'people',
    loadChildren: () => import('../pages/people/people.module').then((m) => m.PeopleModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'feed',
    loadChildren: () => import('../pages/feed/feed.module').then((m) => m.FeedModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'messages',
    loadChildren: () => import('../pages/messages/messages.module').then((m) => m.MessagesModule)
  },
  {
    canActivate: [AuthGuard],
    path: 'setting',
    loadChildren: () => import('../pages/setting/setting.module').then((m) => m.SettingModule)
  },
  { path: 'translator', loadChildren: './translator/translator.module#TranslatorPageModule' },
  { path: 'groupmodal', loadChildren: './groupmodal/groupmodal.module#GroupmodalPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
