package com.family.tribute.repository;

import com.family.tribute.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StoryRepository extends JpaRepository<Story, Long> {
    List<Story> findByMemberId(Long memberId);
}