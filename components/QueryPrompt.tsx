import type { Tool } from '../lib/sanity.queries'
import { GearListProps } from './GearList'

export interface QueryPromptProps {
  query: string
}

export default function QueryPrompt(props: QueryPromptProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="p-4 overflow-hidden rounded-lg shadow-sm ring-2 ring-inset ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Describe your adventure
            </label>
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 border-transparent focus:border-transparent focus:ring-0"
              placeholder={props.query}
              defaultValue={props.query}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
