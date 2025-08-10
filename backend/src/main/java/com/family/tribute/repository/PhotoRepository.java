package com.family.tribute.repository;

import com.family.tribute.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    List<Photo> findByMemberId(Long memberId);
}