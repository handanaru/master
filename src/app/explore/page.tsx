'use client';

import { useMemo, useState } from 'react';
import { BottomTab } from '@/components/layout/bottom-tab';
import { RoutineCard } from '@/components/routines/routine-card';
import { Chip } from '@/components/ui/chip';
import { categories, filterTags, routines } from '@/lib/data/routines';

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('전체');
  const [selectedTag, setSelectedTag] = useState<(typeof filterTags)[number] | null>(null);
  const [search, setSearch] = useState('');

  const filteredRoutines = useMemo(() => {
    return routines.filter((routine) => {
      const categoryMatched = selectedCategory === '전체' || routine.category === selectedCategory;
      const tagMatched = !selectedTag || routine.tags.includes(selectedTag);
      const query = search.trim().toLowerCase();
      const searchMatched =
        query.length === 0 ||
        routine.name.toLowerCase().includes(query) ||
        routine.roleModel.toLowerCase().includes(query) ||
        routine.keywords.join(' ').toLowerCase().includes(query);

      return categoryMatched && tagMatched && searchMatched;
    });
  }, [search, selectedCategory, selectedTag]);

  return (
    <div className="space-y-4 pb-8">
      <header>
        <h1 className="text-2xl font-bold">루틴 탐색</h1>
        <p className="text-sm text-slate-500">카테고리/태그/검색으로 나와 맞는 롤모델 루틴을 찾으세요.</p>
      </header>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="루틴 / 롤모델 검색"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
      />

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            <Chip active={selectedCategory === category}>{category}</Chip>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {filterTags.map((tag) => (
          <button key={tag} onClick={() => setSelectedTag((prev) => (prev === tag ? null : tag))}>
            <Chip active={selectedTag === tag}>{tag}</Chip>
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-500">검색 결과 {filteredRoutines.length}개</p>

      <div className="space-y-3">
        {filteredRoutines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} />
        ))}
      </div>

      <BottomTab active="/explore" />
    </div>
  );
}
