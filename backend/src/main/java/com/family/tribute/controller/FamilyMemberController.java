package com.family.tribute.controller;

import com.family.tribute.model.FamilyMember;
import com.family.tribute.repository.FamilyMemberRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = {"*"})
public class FamilyMemberController {
    private final FamilyMemberRepository repo;
    public FamilyMemberController(FamilyMemberRepository repo) { this.repo = repo; }

    @GetMapping public List<FamilyMember> all() { return repo.findAll(); }
    @GetMapping("/{id}") public FamilyMember one(@PathVariable Long id) { return repo.findById(id).orElseThrow(); }
    @PostMapping public FamilyMember create(@RequestBody FamilyMember m) { return repo.save(m); }
    @PutMapping("/{id}") public FamilyMember update(@PathVariable Long id, @RequestBody FamilyMember m) {
        m.setId(id); return repo.save(m);
    }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repo.deleteById(id); }
}