import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import type { PageSchema } from '../types/PageSchema'
import { pageActions, pageReducer } from './pageSlice'

describe('pageSlice', () => {
  test('setScrollPosition', () => {
    const state: DeepPartial<PageSchema> = {
      scrollPosition: {
        [RoutePath.about]: 250,
        [RoutePath.company]: 0,
      },
    }
    expect(
      pageReducer(
        state as PageSchema,
        pageActions.setScrollPosition({
          path: RoutePath.about,
          position: 100,
        })
      )
    ).toEqual({
      scrollPosition: {
        [RoutePath.about]: 100,
        [RoutePath.company]: 0,
      },
    })
  })
})
