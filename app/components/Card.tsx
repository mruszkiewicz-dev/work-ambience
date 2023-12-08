'use client'

export const Card = () => {
  return (
    <div>
      <p>name</p>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <input type="range" id="cowbell" name="cowbell" min="0" max="100" value="90" step="10" />
    </div>
  );
};
